# 🛡️ Vedashree .B - Security Analyst & Data Scientist Portfolio

> A high-performance, security-hardened portfolio built to showcase research in Anomaly Detection, Clinical NLP, and Digital Forensics.

![Portfolio Preview](website/public/images/Profile.png)

## 🚀 Overview
This is a **Single Page Application (SPA)** built with **React.js** and **Vite**. Unlike standard portfolios, this site is engineered with a "Security-First" architecture, featuring HTTP security headers, 404 anomaly detection, and a clean, academic design system.

**Live Demo:** [Insert Your Vercel Link Here]

---

## 🛠️ Technical Architecture

### **1. Core Stack**
* **Frontend Engine:** React 18 + Vite (for sub-millisecond HMR).
* **Routing:** React Router v6 (Client-side dynamic routing).
* **Styling:** Manual CSS Architecture (No heavy frameworks like Bootstrap).
* **Icons:** Lucide React (Lightweight SVG icons).

### **2. Security Engineering**
* **HTTP Headers:** `vercel.json` configured for `X-Frame-Options: DENY` and strict CSP.
* **URL Hygiene:** Custom `NotFound` route to catch and log invalid URL access attempts (404 Shield).
* **Asset Protection:** No exposed API keys; static data handling.

### **3. UX/UI Features**
* **Data Science Loader:** Custom initial loading state simulating model training.
* **Scroll Reveal:** Intersection Observer API used to lazy-load elements on scroll.
* **Responsive Grid:** CSS Grid/Flexbox layout that adapts from Mobile to 4K screens.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── About.jsx        # Bio & Education Timeline
│   ├── Contact.jsx      # Gradient Contact Section
│   ├── Footer.jsx       # Professional Signature
│   ├── Hero.jsx         # Landing Area (Profile + Code Animation)
│   ├── Loader.jsx       # "Training Model" Initial Screen
│   ├── NotFound.jsx     # 404 Security Shield
│   ├── ProjectDetail.jsx # Case Study Template
│   ├── ScrollReveal.jsx # Animation Wrapper
│   └── Skills.jsx       # Categorized Tech Stack
├── App.jsx              # Main Router & Layout Logic
├── index.css            # Master Stylesheet (Variables + Reset)
└── main.jsx             # Entry Point
public/
├── images/              # Optimized Assets
└── resume.pdf           # Downloadable CV
```
## ⚡ How to Run Locally
 ### **1. Clone the Repository**
 ``` bash
git clone https://github.com/vedashreeb/vedashreeb.github.io.git
```
### **2. Install Dependencies**
```bash
cd vedashreeb.github.io
npm install
```
### **3. Start the Development Server**
```bash
npm run dev
```
or 
```bash
npx vite --force
```
## 📜 License
© 2026 Vedashree .B. All Rights Reserved. Designed for Academic & Professional Representation.
