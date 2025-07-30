# ✂️ Modern Barber Shop Website

A modern, responsive barber shop website built with **React**, **Vite**, and **EmailJS** for seamless appointment booking.

## 🚀 **Live Demo**

🌐 **Live Website:** [https://samd-barber.vercel.app/](https://samd-barber.vercel.app/)

**Experience the full barber shop website with:**
- ✂️ Professional barbering services
- 📧 Working appointment booking system
- 🎨 Modern, responsive design
- 📱 Mobile-optimized experience

## ✨ **Features**

### **🎨 Modern Design**

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional barber shop aesthetic
- **Smooth Animations** - Enhanced user experience
- **Professional Branding** - Logo and consistent styling

### **📧 Email Integration**

- **EmailJS Integration** - Direct frontend to email
- **Professional Templates** - Beautiful email templates with logo
- **Secure Credentials** - Environment variables for security
- **Instant Notifications** - Real-time appointment notifications

### **🛠️ Services & Pricing**

- **17 Professional Services** - Complete barber shop offerings
- **Dynamic Pricing** - Three-tier pricing packages
- **Service Icons** - Visual representation of each service
- **Smooth Navigation** - Easy booking flow

### **📱 User Experience**

- **Single Page Application** - Fast, seamless navigation
- **Smooth Scrolling** - Professional page transitions
- **Contact Forms** - Easy appointment booking
- **Gallery Section** - Showcase barber work

## 🛠️ **Tech Stack**

### **Frontend**

- **React 19** - Modern component-based architecture
- **Vite** - Lightning-fast build tool
- **React Icons** - Professional icon library
- **CSS3** - Modern styling with animations

### **Email System**

- **EmailJS** - Frontend email service
- **Professional Templates** - HTML email templates
- **Secure Configuration** - Environment variables

### **Deployment**

- **Vercel** - Frontend hosting (FREE)
- **GitHub** - Version control
- **Zero Backend** - Frontend-only architecture

## 📋 **Services Offered**

### **Essential Services**

- **Men Haircut** - $35.00
- **Beard Trim and Line Up** - $25.00
- **Hair Tattoo** - $10.00
- **Hair Wash** - $15.00
- **Hair Styling** - $20.00

### **Professional Services**

- **Hair Coloring** - $45.00
- **Kids Haircut** - $25.00
- **Hair Treatment** - $30.00
- **Beard Styling** - $20.00
- **Hair Consultation** - $15.00

### **Premium Services**

- **Complete Grooming** - $60.00
- **Hair Extensions** - $80.00
- **Special Occasion Styling** - $50.00
- **Hair and Beard Package** - $45.00
- **VIP Treatment** - $75.00

## 🚀 **Quick Start**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/your-username/barber-shop.git
cd barber-shop/barber-modern-VITE
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

## 📧 **EmailJS Setup**

### **1. Create EmailJS Account**

- Go to [emailjs.com](https://emailjs.com)
- Sign up for a free account

### **2. Create Email Service**

- Add Gmail or other email service
- Configure SMTP settings

### **3. Create Email Template**

- Design professional HTML template
- Include appointment details
- Add your logo and branding

### **4. Get Credentials**

- Service ID
- Template ID
- Public Key

### **5. Update Environment Variables**

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

## 🚀 **Deployment**

### **Vercel Deployment (Recommended)**

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel --prod
```

4. **Set Environment Variables**
   In Vercel dashboard → Settings → Environment Variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### **Alternative: GitHub + Vercel**

1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

## 📁 **Project Structure**

```
barber-modern-VITE/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Pricing.jsx
│   │   └── Services.jsx
│   ├── assets/
│   │   ├── gallery/
│   │   ├── hero/
│   │   ├── logo/
│   │   └── mine/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 **Key Features**

### **Appointment Booking**

- **Real-time Form** - Instant appointment requests
- **Email Notifications** - Professional email templates
- **Service Selection** - 17 different services
- **Date/Time Picker** - Easy scheduling

### **Responsive Design**

- **Mobile First** - Optimized for mobile devices
- **Tablet Friendly** - Perfect for tablets
- **Desktop Experience** - Full desktop features
- **Cross-browser** - Works on all browsers

### **Performance**

- **Fast Loading** - Vite build optimization
- **Image Optimization** - Compressed assets
- **Code Splitting** - Efficient loading
- **SEO Ready** - Search engine optimized

## 🔧 **Customization**

### **Update Services**

Edit `src/components/Services.jsx`:

```javascript
const services = [
  {
    icon: <GiScissors size={48} color={gold} />,
    title: "Your Service",
    desc: "Service description",
    price: "$XX.XX",
  },
];
```

### **Update Pricing**

Edit `src/components/Pricing.jsx`:

```javascript
const plans = [
  {
    name: "Your Plan",
    price: "$XX",
    features: ["Feature 1", "Feature 2"],
  },
];
```

### **Update Contact Info**

Edit `src/components/Contact.jsx`:

```javascript
const contactInfo = {
  address: "Your Address",
  phone: "Your Phone",
  email: "your@email.com",
};
```

## 📧 **Email Template**

The project includes professional email templates:

- **HTML Template** - Beautiful responsive design
- **Logo Integration** - Branded emails
- **Appointment Details** - Complete booking info
- **Professional Styling** - Consistent branding

## 🚀 **Benefits**

### **Cost Effective**

- ✅ **$0/month** - Free Vercel hosting
- ✅ **$0/month** - Free EmailJS (200 emails/month)
- ✅ **No Backend** - Zero server costs
- ✅ **No Database** - No database hosting

### **Easy Maintenance**

- ✅ **Frontend Only** - Simple architecture
- ✅ **EmailJS** - No email server setup
- ✅ **Vercel** - Automatic deployments
- ✅ **GitHub** - Version control

### **Professional**

- ✅ **Modern Design** - Professional appearance
- ✅ **Mobile Responsive** - Works everywhere
- ✅ **Fast Loading** - Optimized performance
- ✅ **SEO Ready** - Search engine friendly

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 📞 **Support**

For support or questions:

- **Email**amanuelaraya908@gmail.com
- **Phone**: +1-587-707-6257
- **Website**: [your-website.com](https://www.amanuelwubneh.com/)

## 🎉 **Acknowledgments**

- **React Team** - Amazing framework
- **Vite Team** - Lightning-fast build tool
- **EmailJS** - Reliable email service
- **Vercel** - Excellent hosting platform

---

**Built with ❤️ for modern barber shops**
