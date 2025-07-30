import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Appointment from "./components/Appointment";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sections = [];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Appointment />
      <Testimonials />
      <Contact />
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
      <Footer />
    </>
  );
}

export default App;
