# 🚀 Complete Deployment Guide

## **📋 Deployment Overview**

**Frontend:** Vercel (React/Vite)  
**Backend:** Railway/Render/Heroku (Node.js)  
**Email:** EmailJS (Already working)

---

## **🎯 PART 1: Frontend Deployment (Vercel)**

### **Step 1: Prepare Frontend for Deployment**

#### **1.1 Update Environment Variables for Production**

Create `.env.production` file:

```env
# EmailJS Configuration (Production)
VITE_EMAILJS_SERVICE_ID=service_my1qke2
VITE_EMAILJS_TEMPLATE_ID=template_50zgiie
VITE_EMAILJS_PUBLIC_KEY=QADkDuu1_Y-rB7irt

# API Configuration (Update with your backend URL)
VITE_API_URL=https://your-backend-url.railway.app
```

#### **1.2 Update API Endpoints**

Since we're using EmailJS, no backend API calls needed! But if you add backend later:

```javascript
// In Appointment.jsx (if you add backend later)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
```

#### **1.3 Build Optimization**

Update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          emailjs: ["@emailjs/browser"],
        },
      },
    },
  },
});
```

### **Step 2: Deploy to Vercel**

#### **2.1 Install Vercel CLI**

```bash
npm install -g vercel
```

#### **2.2 Login to Vercel**

```bash
vercel login
```

#### **2.3 Deploy**

```bash
# Navigate to frontend directory
cd barber-modern-VITE

# Deploy
vercel --prod
```

#### **2.4 Alternative: Deploy via GitHub**

1. **Push to GitHub:**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set build settings:
     - **Framework Preset:** Vite
     - **Root Directory:** `barber-modern-VITE`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`

#### **2.5 Environment Variables in Vercel**

In Vercel dashboard:

1. Go to your project
2. Settings → Environment Variables
3. Add:
   ```
   VITE_EMAILJS_SERVICE_ID=service_my1qke2
   VITE_EMAILJS_TEMPLATE_ID=template_50zgiie
   VITE_EMAILJS_PUBLIC_KEY=QADkDuu1_Y-rB7irt
   ```

---

## **🎯 PART 2: Backend Deployment Options**

### **Option A: Railway (Recommended)**

#### **Step 1: Prepare Backend**

```bash
# Create backend directory
mkdir barber-backend
cd barber-backend

# Initialize package.json
npm init -y

# Install dependencies
npm install express cors dotenv nodemailer
```

#### **Step 2: Create Backend Files**

**`package.json`:**

```json
{
  "name": "barber-backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

**`server.js`:**

```javascript
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Barber backend running" });
});

// Appointment endpoint (if needed later)
app.post("/api/appointment", async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    // Log appointment (for backup)
    console.log("Appointment received:", {
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Appointment logged successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Barber backend running on port ${PORT}`);
});
```

**`.env`:**

```env
PORT=3001
NODE_ENV=production
```

#### **Step 3: Deploy to Railway**

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your backend repository**
6. **Railway will auto-detect and deploy**

#### **Step 4: Get Backend URL**

- Railway will provide: `https://your-app.railway.app`
- Update frontend environment variables with this URL

### **Option B: Render**

#### **Step 1: Prepare for Render**

**`render.yaml`:**

```yaml
services:
  - type: web
    name: barber-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

#### **Step 2: Deploy to Render**

1. **Go to [render.com](https://render.com)**
2. **Sign up with GitHub**
3. **Click "New Web Service"**
4. **Connect your GitHub repo**
5. **Configure:**
   - **Name:** barber-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### **Option C: Heroku**

#### **Step 1: Prepare for Heroku**

**`Profile`:**

```
web: node server.js
```

#### **Step 2: Deploy to Heroku**

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create barber-backend-app

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

---

## **🎯 PART 3: Domain & SSL Setup**

### **Custom Domain (Optional)**

#### **Vercel Domain Setup:**

1. Go to Vercel project dashboard
2. Settings → Domains
3. Add your domain
4. Update DNS records as instructed

#### **SSL Certificate:**

- Vercel provides free SSL automatically
- Railway/Render/Heroku provide SSL automatically

---

## **🎯 PART 4: Post-Deployment Checklist**

### **✅ Frontend (Vercel):**

- [ ] Environment variables set
- [ ] Build successful
- [ ] EmailJS working
- [ ] All pages loading
- [ ] Forms submitting correctly

### **✅ Backend (Railway/Render/Heroku):**

- [ ] Health check endpoint working
- [ ] CORS configured
- [ ] Environment variables set
- [ ] Logs showing no errors

### **✅ Testing:**

- [ ] Submit test appointment
- [ ] Check email received
- [ ] Test all form fields
- [ ] Test responsive design

---

## **🚀 Deployment Commands Summary**

### **Frontend (Vercel):**

```bash
cd barber-modern-VITE
vercel --prod
```

### **Backend (Railway):**

```bash
# Railway auto-deploys from GitHub
# Just push your code!
git add .
git commit -m "Deploy backend"
git push origin main
```

---

## **📧 Email System (Already Working!)**

Since EmailJS is working perfectly:

- ✅ **No backend needed for emails**
- ✅ **Direct frontend to email**
- ✅ **Secure and reliable**
- ✅ **Professional templates**

**Your barber shop website is ready for production! 🎉**
