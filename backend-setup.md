# 🔧 Backend Setup for Railway

## **Quick Backend Setup (Optional)**

Since EmailJS handles emails, you only need a backend if you want:

- Database storage
- Admin dashboard
- Additional API endpoints

## **🚀 Railway Backend Setup**

### **Step 1: Create Backend Directory**

```bash
# Create backend folder
mkdir barber-backend
cd barber-backend

# Initialize
npm init -y
```

### **Step 2: Install Dependencies**

```bash
npm install express cors dotenv
npm install --save-dev nodemon
```

### **Step 3: Create Backend Files**

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
    "dotenv": "^16.3.1"
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
  res.json({
    status: "OK",
    message: "Barber backend running",
    timestamp: new Date().toISOString(),
  });
});

// Appointment logging (backup)
app.post("/api/appointment", async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    // Log appointment to console (for backup)
    console.log("📧 Appointment received:", {
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      success: true,
      message: "Appointment logged successfully",
    });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Barber backend running on port ${PORT}`);
  console.log(`📧 Health check: http://localhost:${PORT}/api/health`);
});
```

**`.env`:**

```env
PORT=3001
NODE_ENV=production
```

### **Step 4: Deploy to Railway**

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your backend repository**
6. **Railway auto-deploys!**

### **Step 5: Get Backend URL**

- Railway provides: `https://your-app.railway.app`
- Test health check: `https://your-app.railway.app/api/health`

## **🎯 Why Backend is Optional**

Since EmailJS works perfectly:

- ✅ **Emails sent directly** from frontend
- ✅ **No server needed** for email functionality
- ✅ **Professional and reliable**
- ✅ **Zero maintenance**

**Backend is only needed for advanced features!**

## **📧 Current Setup (Recommended)**

**Frontend:** Vercel + EmailJS

- ✅ **Fully functional**
- ✅ **Professional emails**
- ✅ **Zero backend complexity**
- ✅ **Ready for production**

**Your barber shop is already production-ready! 🎉**
