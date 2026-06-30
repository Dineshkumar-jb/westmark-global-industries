# 🚀 Westmark Global Industries Portal - Deployment & Operations Guide

This package contains the complete, pre-configured codebase for the Westmark Global Industries website portal.

All project dependencies have been pre-installed inside the `node_modules` folder, and the real database configuration secrets have been pre-configured in the `.env` file. No internet connection or package downloads are required to run or compile this project.

---

## 📂 Package Contents

* `src/` — React application source code (components, pages, forms).
* `node_modules/` — **Pre-installed dependencies** (Vite, React, Firebase, EmailJS, etc.).
* `public/` — Static assets (logo, brochure PDF, icons).
* `.env` — **Active configuration credentials** (contains real Firebase and EmailJS keys).
* `vite.config.js` — Vite compiler and bundle configurations.
* `package.json` — Build scripts and dependency versions.

---

## 💻 How to Run Locally (Development Mode)

Since the `node_modules` folder is already included, you do not need to run `npm install`.

1. Open your terminal in the extracted folder.
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

---

## 📦 How to Build for Production

To compile and optimize the website for production hosting:

1. Open your terminal in the extracted folder.
2. Run the build script:
   ```bash
   npm run build
   ```
3. This will compile all React code into static HTML, CSS, and JS assets and place them inside a newly created **`dist/`** directory.

---

## ☁️ Deployment Guidelines (How to Host the Site)

Once you run `npm run build`, you can host the contents of the **`dist/`** folder on any static web hosting provider.

### Option A: Firebase Hosting (Already Configured)
This project contains out-of-the-box settings for Firebase Hosting (`firebase.json`, `.firebaserc`, and `firestore.rules`).
1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Log in to the Firebase account: `firebase login`
3. Deploy the build:
   ```bash
   firebase deploy
   ```

### Option B: Traditional cPanel / Apache / Nginx Hosting
1. Generate the production build using `npm run build`.
2. Connect to your server via FTP/SFTP or use your cPanel File Manager.
3. Upload the **entire contents of the `dist/` folder** directly to your web server's public root directory (typically `public_html` or `www`).

### Option C: Vercel or Netlify
1. Link the project repository or drag-and-drop the extracted project folder into Vercel/Netlify.
2. Set the build commands as:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. **Important**: Add the environment variables from the `.env` file into the Vercel/Netlify Environment Variables settings in their dashboard.

---

## ⚙️ Backend Services Configuration

The contact and quote inquiry forms on the website connect to two main services:

### 1. Firebase Firestore
* All form inquiries are stored under a collection named `contacts` in Firestore.
* If you need to restrict database write rules, refer to `firestore.rules`.

### 2. EmailJS Notifications
* Inquiries trigger automatic email alerts to the administrator (`admin@westmarkglobal.org`) and send a confirmation copy to the customer.
* Email templates and parameters can be managed on the EmailJS Dashboard using the Service and Template IDs configured in the `.env` file.
