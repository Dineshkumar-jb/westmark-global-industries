import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import emailjs from "@emailjs/browser";

// Change this to the owner's email address where notifications should be received
const OWNER_EMAIL = "admin@westmarkglobal.org";

// Option A: Set this to a secondary administrator email to CC them, or "" to disable
const CC_ADMIN_EMAIL = "";

// Option B: Set to true to automatically send a CC receipt copy of the email to the client
const CC_CLIENT = true;

// Replace with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only if config is updated, otherwise fallback to mock/demo modes
let app;
let db = null;
let auth = null;
let analytics = null;
let isFirebaseConfigured = false;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY" && firebaseConfig.apiKey !== "") {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    auth = getAuth(app);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
    isFirebaseConfigured = true;
    console.log("Firebase initialized successfully!");
  } catch (error) {
    console.error("Firebase failed to initialize:", error);
  }
} else {
  console.log("Firebase is running in demo mode. Update src/firebase.js with credentials to connect to Firebase.");
}

/**
 * Builds a styled HTML table body summarizing form inputs for the email body.
 * @param {Object} data - Submitted form inputs
 * @returns {String} HTML body string
 */
function buildEmailHtml(data) {
  const name = `${data.firstName} ${data.lastName}`;
  let detailsHtml = "";

  if (data.formType === "contact") {
    detailsHtml = `
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Inquiry Category</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.category || "General"}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Item / Service Name</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.itemName || "N/A"}</td></tr>
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Quantity / Cargo Specs</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.specs || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Location / Port</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.location || "N/A"}</td></tr>
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Special Notes / Details</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.message || data.notes || "None"}</td></tr>
    `;
  } else {
    detailsHtml = `
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Company Name</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.companyName || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Phone Number</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.phone || "N/A"}</td></tr>
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Quote Requirement</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.quoteType || "General Quote"}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Target Timeline</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.timeline || "N/A"}</td></tr>
      <tr style="background-color: #fcfbf9;"><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Detailed Specifications</td><td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${data.message || "None"}</td></tr>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; color: #083335; max-width: 600px; margin: 0 auto; border: 1px solid #25aec3; padding: 20px; border-radius: 8px; background-color: #fdf9fa;">
      <h2 style="color: #083335; border-bottom: 2px solid #dfba10; padding-bottom: 10px; margin-top: 0; font-family: serif;">
        Westmark Global - ${data.formType === 'quote' ? 'Get a Quote Request' : 'Contact & Item Inquiry'}
      </h2>
      <p style="font-size: 15px; font-family: sans-serif; line-height: 1.5;">
        Hello, a user has submitted a ${data.formType === 'quote' ? 'Quote Request' : 'Contact Inquiry'} form on the Westmark Global website portal. Details are listed below:
      </p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
        <thead>
          <tr style="background-color: #083335; color: #fff;">
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; width: 40%; font-family: sans-serif;">Field</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left; font-family: sans-serif;">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Form Type</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-transform: uppercase; color: #25aec3; font-weight: bold; font-family: sans-serif;">
              ${data.formType === 'quote' ? 'GET A QUOTE' : 'CONTACT & ITEM INQUIRY'}
            </td>
          </tr>
          <tr style="background-color: #fcfbf9;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Contact Name</td>
            <td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; font-family: sans-serif;">Email Address</td>
            <td style="padding: 10px; border: 1px solid #ddd; font-family: sans-serif;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${detailsHtml}
        </tbody>
      </table>
      
      <p style="margin-top: 25px; font-size: 11px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 15px; font-family: sans-serif;">
        Sent automatically from Westmark Portal.
      </p>
    </div>
  `;
}

/**
 * Submits a contact inquiry. Saves to Firestore if configured, otherwise logs in dev console.
 * It packages template rules expected by the Firestore "Trigger Email" Extension.
 * @param {Object} data - Submitted form inputs
 */
export async function submitInquiry(data) {
  const ccRecipients = [];
  if (CC_ADMIN_EMAIL) ccRecipients.push(CC_ADMIN_EMAIL);
  if (CC_CLIENT && data.email) ccRecipients.push(data.email);

  const isQuote = data.formType === 'quote';
  const subjectText = isQuote 
    ? `🎯 New Quote Request: [${data.quoteType || 'General Quote'}] from ${data.firstName} ${data.lastName}`
    : `🔔 New Contact Inquiry: [${data.category || 'Item'}] - ${data.itemName || 'General'} from ${data.firstName} ${data.lastName}`;

  const emailPayload = {
    to: OWNER_EMAIL,
    message: {
      subject: subjectText,
      html: buildEmailHtml(data)
    }
  };

  if (ccRecipients.length > 0) {
    emailPayload.cc = ccRecipients;
  }

  let result;
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...data,
        ...emailPayload,
        createdAt: new Date().toISOString()
      });
      result = { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error submitting inquiry to Firestore:", error);
      throw error;
    }
  } else {
    result = await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Demo Mode Inquiry Submission (No Firestore credentials):", {
          ...data,
          ...emailPayload
        });
        resolve({ success: true, demo: true });
      }, 800);
    });
  }

  // EmailJS Support for 2-template limit on free accounts
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  const emailJsContactTemplate = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsQuoteTemplate = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const targetTemplateId = isQuote ? emailJsQuoteTemplate : emailJsContactTemplate;

  if (emailJsServiceId && targetTemplateId && emailJsPublicKey) {
    try {
      const emailHtml = buildEmailHtml(data);
      const templateParams = {
        to_email: OWNER_EMAIL,
        form_type: isQuote ? 'GET A QUOTE' : 'CONTACT & ITEM INQUIRY',
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: subjectText,
        message_html: emailHtml,
        ...data
      };
      await emailjs.send(emailJsServiceId, targetTemplateId, templateParams, emailJsPublicKey);
      console.log(`Email sent successfully via EmailJS (${isQuote ? 'Quote' : 'Contact'} template)!`);
    } catch (err) {
      console.error("Failed to send email via EmailJS:", err);
    }
  }

  return result;
}

export { db, auth, analytics };
