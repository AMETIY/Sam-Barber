# 📧 Simple Email Setup with Resend

## 🚀 Quick Setup (5 minutes)

### 1. Get Free Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for free account
3. Get your API key (starts with `re_`)

### 2. Update .env file

```env
RESEND_API_KEY=re_your_actual_api_key_here
PORT=3001
```

### 3. Restart server

```bash
node server.js
```

### 4. Test email

Submit an appointment form on your website!

## ✅ Why Resend is Better

- **Free tier**: 3,000 emails/month
- **No complex setup**: Just API key
- **Reliable delivery**: 99.9% delivery rate
- **Professional emails**: Beautiful HTML templates
- **Instant setup**: No Gmail app passwords needed

## 🔧 Current Status

- ✅ **Backend**: Running on port 3001
- ✅ **Frontend**: All components working
- ✅ **Form**: Submits successfully
- ⚠️ **Email**: Needs Resend API key

## 📧 Test the System

### Option 1: Website Form

1. Go to `http://localhost:5173`
2. Fill out appointment form
3. Submit and check your email

### Option 2: API Test

```bash
curl -X POST http://localhost:3001/api/appointment \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","service":"Men Haircut","date":"2024-01-15","time":"14:00","message":"Test appointment"}'
```

## 🎯 Benefits

✅ **Instant setup** - No complex Gmail configuration  
✅ **Reliable delivery** - Professional email service  
✅ **Free tier** - 3,000 emails per month  
✅ **Beautiful emails** - Professional HTML templates  
✅ **Easy maintenance** - Simple API key management

## 🛠️ Troubleshooting

### If emails don't send:

1. Check API key in `.env` file
2. Verify API key starts with `re_`
3. Check server console for error messages
4. Ensure server is running on port 3001

### Fallback:

All appointments are logged to console for manual processing.
