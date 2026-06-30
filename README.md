# 🌐 Westmark Global Industries Portal

[![Vite](https://img.shields.io/badge/Vite-5.2.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-F25F22?style=for-the-badge)](https://www.emailjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A state-of-the-art, high-performance web portal for **Westmark Global Industries**—a leading international trading and logistics partner operating across 50+ countries. Built using **React**, **Vite**, **Firebase**, and **EmailJS**, this portal offers customers a seamless interface to explore commodities, request quotations, and interact with an automated customer support agent.

---

## ✨ Features

- **⚡ Fast-loading Single Page Application (SPA)**: Powered by React 18 & Vite, featuring smooth client-side routing via React Router DOM.
- **🤖 Built-in Interactive Q&A Chatbot**: A custom-designed, floating assistant that instantly answers queries regarding:
  - **Trade Portfolio**: Basmati & Non-Basmati rice, spices, carpets, packaging materials, PPE products, hygiene products, etc.
  - **Logistics & Relocation**: Freight forwarding (air, sea, land), warehousing, customs clearance, and residential/corporate relocation.
  - **Inquiries**: Pricing, MOQs (Minimum Order Quantities), payment terms (L/C, T/T), certifications, and delivery timelines.
- **📥 Robust Contact & Quote Request Workflows**:
  - Validated forms that securely capture inquiries.
  - Dual-integration backend: submits data to **Firebase Firestore** and routes notifications through **EmailJS**.
  - Automatic Email CC templates for sending submission receipts to customers.
- **📱 Responsive & Premium Visual Design**: Custom dark-themed aesthetics, glassmorphism, micro-animations, layout grid cards, and WhatsApp quick-contact utility.
- **🔍 SEO Ready**: Configured with dynamic, page-specific titles, keywords, and description tags using `react-helmet-async`.
- **🔌 Offline/Demo Mode Support**: Runs gracefully out of the box in "Demo Mode" if API keys are not provided, printing form inputs and chatbot logs to the browser console.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: React 18.3, HTML5, Vanilla CSS3 (Custom Design System)
- **Tooling/Bundler**: Vite 5.2 (Fast HMR, optimized production builds)
- **Routing**: React Router DOM 6.23
- **Data & Mail Backend**: Firebase Web SDK 10.12, EmailJS Browser SDK 4.4
- **SEO/Head Management**: React Helmet Async 3.0

---

## 🚀 Getting Started

Follow these steps to set up the project locally for development or production:

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and [npm](https://www.npmjs.com/) installed.

### 📥 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/westmark-global-industries.git
   cd westmark-global-industries
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

### ⚙️ Environment Configuration

1. Copy the environment variables template:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your Firebase and EmailJS credentials:
   ```env
   # Firebase configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

   # EmailJS configuration (Optional - for email notifications)
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

### 💻 Running Locally

Start the Vite development server with:
```bash
npm run dev
```
The application will be served at `http://localhost:5173` (or the next available port).

### 📦 Building for Production

Compile and optimize the project for production:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory, ready to be deployed to any static host.

---

## 📂 Directory Structure

```text
├── assets/                  # Public assets, raw documents or design mockups
├── dist/                    # Production-ready build assets (generated)
├── public/                  # Static assets served directly (icons, logos, images)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Chatbot.jsx      # Custom Q&A Assistant floating UI and state
│   │   ├── Footer.jsx       # Global footer containing secondary links
│   │   ├── Navbar.jsx       # Header & main routing navbar
│   │   └── WhatsAppButton.jsx # Sticky floating WhatsApp contact action
│   ├── pages/               # Page-level components
│   │   ├── About.jsx        # Company background, vision, and timeline
│   │   ├── Contact.jsx      # Form validations and input submissions
│   │   ├── Home.jsx         # Landing page and key highlights
│   │   ├── Products.jsx     # Detail layout of traded commodity catalogs
│   │   └── Services.jsx     # Overview of logistics & relocation services
│   ├── App.jsx              # Main App wrapper, routes, & global components
│   ├── firebase.js          # DB client configuration and submit handlers
│   ├── index.css            # Global CSS custom properties, styling, & themes
│   └── main.jsx             # React entry mountpoint
├── .env.example             # Template for local secret configurations
├── firebase.json            # Firebase hosting and security rules config
├── firestore.rules          # Database write permissions & rule constraints
├── package.json             # Scripts & library dependencies
├── vite.config.js           # Vite plugin configurations
└── README.md                # Project documentation
```

---

## ☁️ Deployment

### Firebase Hosting

This project is configured out-of-the-box for Firebase Hosting. 
1. Install the Firebase CLI globally: `npm install -g firebase-tools`
2. Log in to your Firebase account: `firebase login`
3. Initialize hosting (if not done already): `firebase init hosting` (Choose `dist` as your public directory and select `Yes` to configure as a single-page app).
4. Deploy the build:
   ```bash
   npm run build
   firebase deploy
   ```

### Vercel / Netlify / GitHub Pages

Since it is a standard Vite SPA, you can deploy it directly by linking your GitHub repository to **Vercel** or **Netlify** and setting the build settings to:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 🤝 Contributing

Contributions are welcome! If you would like to submit improvements, please check the [Contributing Guidelines](CONTRIBUTING.md).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
