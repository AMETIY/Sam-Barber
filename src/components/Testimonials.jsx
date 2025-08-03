import React, { useState } from "react";
import bgImg from "../assets/testimonial-bg.jpg";
import client1 from "../assets/gallery/home-blog1.png";
import client2 from "../assets/gallery/home-blog2.png";
import client3 from "../assets/gallery/gallery4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const gold = "#D19D64";
const testimonials = [
  {
    img: client1,
    name: "Amanuel Wubneh",
    role: "Regular Client",
    quote:
      "The attention to detail here is incredible. Every haircut feels like a work of art. The barbers truly understand what makes a great cut and always deliver beyond expectations.",
  },
  {
    img: client2,
    name: "Samuel",
    role: "First Timer",
    quote:
      "I was hesitant about trying a new barbershop, but the moment I walked in, I felt welcomed. The consultation was thorough, and the result exceeded my expectations. I'm definitely coming back!",
  },
  {
    img: client3,
    name: "Mike Johnson",
    role: "Beard Enthusiast",
    quote:
      "Their beard grooming expertise is unmatched. They understand the art of shaping and styling facial hair like no one else. My beard has never looked better!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
    setPaused(true);
  };
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
    setPaused(true);
  };

  // Autoplay effect
  React.useEffect(() => {
    if (paused) return;
    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      5000
    );
    return () => clearTimeout(timer);
  }, [current, paused]);

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        background: "#181818",
        padding: "80px 0 60px 0",
        minHeight: 500,
        fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Transparent background image overlay */}
      <img
        src={bgImg}
        alt="Testimonials BG"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.13,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              margin: "0 auto 18px auto",
              width: 60,
              height: 4,
              background: gold,
              borderRadius: 2,
            }}
          />
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: 2,
              margin: 0,
              fontFamily:
                "'Oswald', 'Montserrat', 'Poppins', Arial, sans-serif",
            }}
          >
            CLIENT STORIES
          </h2>
          <p
            style={{
              color: "#eee",
              fontSize: "1.15rem",
              margin: "18px auto 0 auto",
              maxWidth: 600,
              fontWeight: 400,
            }}
          >
            Real experiences from our valued clients
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <button onClick={prev} aria-label="Previous" style={arrowBtnStyle}>
            <FaChevronLeft />
          </button>
          <div
            style={{
              background: "rgba(24,24,24,0.82)",
              borderRadius: 18,
              boxShadow: `0 4px 32px 0 ${gold}22`,
              padding: "38px 32px 32px 32px",
              minWidth: 320,
              maxWidth: 420,
              color: "#fff",
              textAlign: "center",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                objectFit: "cover",
                border: `3px solid ${gold}`,
                marginBottom: 8,
              }}
            />
            <div style={{ fontWeight: 900, fontSize: "1.18rem", color: gold }}>
              {testimonials[current].name}
            </div>
            <div
              style={{
                color: "#fff",
                opacity: 0.7,
                fontSize: "1.02rem",
                marginBottom: 8,
              }}
            >
              {testimonials[current].role}
            </div>
            <div
              style={{
                fontSize: "1.13rem",
                color: "#fff",
                fontStyle: "italic",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              “{testimonials[current].quote}”
            </div>
          </div>
          <button onClick={next} aria-label="Next" style={arrowBtnStyle}>
            <FaChevronRight />
          </button>
        </div>
        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 28,
          }}
        >
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setPaused(true);
              }}
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: idx === current ? gold : "#fff",
                opacity: idx === current ? 1 : 0.4,
                cursor: "pointer",
                border: `2px solid ${gold}`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const arrowBtnStyle = {
  background: "rgba(24,24,24,0.7)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
};

export default Testimonials;
