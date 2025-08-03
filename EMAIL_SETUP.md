# 📧 Email Setup Instructions

## 🚀 Quick Setup

### 1. Create `.env` file

Create a `.env` file in the root directory with your Gmail credentials:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

### 2. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an "App Password" for this application
4. Use that password in the `.env` file

### 3. Start the Backend Server

```bash
node server.js
```

### 4. Start the Frontend

```bash
npm run dev
```

## 🔧 How it Works

- **Frontend**: React app on `http://localhost:5173`
- **Backend**: Node.js server on `http://localhost:3001`
- **Email**: Sent directly to your Gmail account

## 📧 Email Features

✅ **Direct Gmail delivery** - No third-party services  
✅ **Professional HTML emails** - Beautiful appointment notifications  
✅ **Real-time feedback** - Success/error messages  
✅ **Secure credentials** - Environment variables

## 🛠️ Troubleshooting

### If emails don't send:

1. Check Gmail credentials in `.env`
2. Ensure 2FA is enabled and app password is correct
3. Check server console for error messages
4. Verify both frontend and backend are running

### Test the email system:

```bash
curl -X POST http://localhost:3001/api/appointment \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","service":"Men Haircut","date":"2024-01-15","time":"14:00","message":"Test appointment"}'
```
