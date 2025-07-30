import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Performance monitoring - Web Vitals tracking can be added here if needed

// Performance optimization
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Preload critical resources
const preloadCriticalResources = () => {
  const criticalImages = [
    "/src/assets/hero/Hero_bg.jpg",
    "/src/assets/mine/use/About1.png",
    "/src/assets/gallery/appointment_bg.jpg",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
preloadCriticalResources();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
