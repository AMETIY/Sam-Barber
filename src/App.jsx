import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Gallery = lazy(() => import("./components/Gallery"));
const Pricing = lazy(() => import("./components/Pricing"));
const Appointment = lazy(() => import("./components/Appointment"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      background: "#f7f5f2",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #D19D64",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const sections = [];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Appointment />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            minHeight: "80vh",
            padding: "80px 0",
            background: "#f7f7f7",
            color: "#222",
            borderBottom: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          {section.label}
        </section>
      ))}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
