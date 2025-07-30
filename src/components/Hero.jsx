import React, { useState } from "react";
import hero1 from "../assets/hero/Hero_bg.jpg";
import hero2 from "../assets/hero/hero_try.jpg";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineAccessTime,
} from "react-icons/md";
import { GiScissors } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const slides = [
  {
    bg: hero1,
    top: "PREMIUM BARBERING",
    title: "EXPERIENCE",
    subtitle:
      "Where tradition meets modern style. Expert barbers crafting your perfect look with precision cuts, classic techniques, and contemporary trends.",
  },
  {
    bg: hero2,
    top: "CRAFTING YOUR",
    title: "SIGNATURE STYLE",
    subtitle:
      "From classic cuts to modern fades, we transform your vision into reality. Every haircut tells your story with professional expertise and attention to detail.",
  },
];

const infoBar = [
  {
    icon: <MdOutlineLocationOn size={32} />, // location
    label: "1181 11 Ave SW, Calgary, AB T2R 1K9",
  },
  {
    icon: <MdOutlinePhone size={32} />, // phone
    label: "+1 587-917-8258",
  },
  {
    icon: <MdOutlineAccessTime size={32} />, // time
    label: "MONDAY - FRIDAY: 10.00 AM - 09.00 PM",
  },
];

const gold = "#D19D64";
const fontFamily = `'Oswald', 'Montserrat', 'Poppins', Arial, sans-serif`;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  // For optional auto-play on desktop
  React.useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "auto",
        width: "100%",
        overflow: "hidden",
        fontFamily,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${slide.bg}) center center/cover no-repeat`,
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      />
      {/* Desktop Carousel Arrows */}
      <button
        className="carousel-arrow-btn-desktop left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="carousel-arrow-icon-desktop" />
      </button>
      <button
        className="carousel-arrow-btn-desktop right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight className="carousel-arrow-icon-desktop" />
      </button>
      {/* Carousel Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          fontFamily,
          minHeight: "90vh",
          gap: 0,
        }}
      >
        {/* Scissors Icon and EST. 1980 */}
        <div
          style={{
            marginBottom: 8,
            color: gold,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GiScissors size={60} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 8,
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: 2,
              color: "#fff",
            }}
          >
            <span
              style={{
                borderBottom: `2px solid ${gold}`,
                width: 40,
                display: "inline-block",
                marginRight: 8,
              }}
            ></span>
            <span style={{ color: "#fff", fontWeight: 400, letterSpacing: 2 }}>
              EST.
            </span>
            <span style={{ color: gold, fontWeight: 700, margin: "0 4px" }}>
              2019
            </span>
            <span
              style={{
                borderBottom: `2px solid ${gold}`,
                width: 40,
                display: "inline-block",
                marginLeft: 8,
              }}
            ></span>
          </div>
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            letterSpacing: "2px",
            marginBottom: 8,
            color: gold,
            fontWeight: 600,
            fontFamily,
          }}
        >
          {slide.top}
        </div>
        {/* Slide Title with Carousel Arrows for Mobile */}
        <div className="slide-title-arrows-mobile">
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="carousel-arrow-btn-mobile"
          >
            <FaChevronLeft className="carousel-arrow-icon-mobile" />
          </button>
          <h1
            style={{
              fontSize: "2.1rem",
              fontWeight: 900,
              letterSpacing: "2px",
              margin: 0,
              lineHeight: 1.1,
              fontFamily: fontFamily,
              textShadow: "0 4px 24px rgba(0,0,0,0.5)",
              flex: 1,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {slide.title}
          </h1>
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="carousel-arrow-btn-mobile"
          >
            <FaChevronRight className="carousel-arrow-icon-mobile" />
          </button>
        </div>
        {/* Hide h1 on mobile, show on desktop */}
        <h1
          className="slide-title-desktop"
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            letterSpacing: "4px",
            margin: 0,
            lineHeight: 1.1,
            fontFamily: fontFamily,
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {slide.title}
        </h1>
        <div
          style={{
            fontSize: "0.95rem",
            margin: "14px 0 24px 0",
            color: "#fff",
            fontWeight: 400,
            fontFamily,
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          {slide.subtitle}
        </div>
        {/* Make Appointment Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 0 8px 0",
            width: "100%",
            zIndex: 10,
          }}
        >
          <a
            href="#appointment"
            style={{
              background: gold,
              color: "#222",
              fontWeight: 700,
              border: "none",
              padding: "12px 32px",
              borderRadius: "4px",
              fontSize: "1.1rem",
              letterSpacing: "2px",
              textDecoration: "none",
              transition: "background 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              fontFamily,
              textAlign: "center",
              minWidth: 200,
              maxWidth: "90vw",
              cursor: "pointer",
            }}
          >
            MAKE AN APPOINTMENT
          </a>
        </div>
        {/* Info Bar */}
        <div
          className="hero-info-bar-responsive"
          style={{
            display: "flex",
            gap: 48,
            padding: "10px 8px",
            alignItems: "center",
            zIndex: 5,
            minWidth: 0,
            maxWidth: "95vw",
            margin: "0 auto",
            marginTop: 32,
            boxSizing: "border-box",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {infoBar.map((info, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 120,
              }}
            >
              <span style={{ color: gold, marginBottom: 6 }}>{info.icon}</span>
              <span
                style={{
                  float: "left",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#FFFFFF",
                  fontFamily: "'Oswald', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: "normal",
                  lineHeight: 1.5,
                }}
              >
                {info.label}
              </span>
            </div>
          ))}
        </div>
        {/* Slide Indicators for Desktop */}
        <div className="carousel-indicators-desktop">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot-desktop${
                idx === current ? " active" : ""
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      {/* Google Fonts for Montserrat (headings), Roboto (body), and Oswald (info bar) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Roboto:wght@400;700&family=Oswald:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {/* Responsive styles for info bar */}
      <style>{`
        /* Responsive Hero Section */
        @media (max-width: 900px) {
          .hero-info-bar-responsive {
            gap: 24px !important;
            padding: 8px 2px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-info-bar-responsive {
            flex-direction: column !important;
            gap: 0 !important;
            padding: 4px 0 !important;
            border-width: 1px 0 0 0 !important;
            margin-top: 18px !important;
          }
          .hero-info-bar-responsive > div {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.2) !important;
            min-width: 0 !important;
            width: 100% !important;
            padding: 8px 0 !important;
          }
          .hero-info-bar-responsive > div:first-child {
            border-top: none !important;
          }
        }
        @media (max-width: 400px) {
          .hero-info-bar-responsive {
            font-size: 10px !important;
            padding: 2px 0 !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            min-height: auto !important;
            padding-bottom: 0 !important;
          }
        }
        /* Responsive Carousel Arrows */
        .carousel-arrows-responsive {
          display: none;
        }
        @media (max-width: 700px) {
          .carousel-arrows-responsive {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 0 8px 0;
            position: relative;
            z-index: 21;
          }
          .carousel-arrow-btn {
            position: static !important;
            width: 38px !important;
            height: 38px !important;
            margin: 0 12px;
            background: rgba(40,40,40,0.7);
            border: none;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s;
          }
          .carousel-arrow-icon {
            color: ${gold};
            font-size: 18px !important;
            transition: transform 0.18s;
          }
          .carousel-arrow-btn:hover .carousel-arrow-icon {
            transform: scale(1.18);
          }
        }
        @media (min-width: 701px) {
          .carousel-arrows-responsive {
            display: none !important;
          }
          .carousel-arrow-btn {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 64px !important;
            height: 64px !important;
            background: rgba(40,40,40,0.7);
            border: none;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 20;
            transition: background 0.2s;
          }
          .carousel-arrow-btn.left {
            left: 24px !important;
            right: auto !important;
          }
          .carousel-arrow-btn.right {
            right: 24px !important;
            left: auto !important;
          }
          .carousel-arrow-icon {
            color: ${gold};
            font-size: 28px !important;
          }
        }
        /* Hide mobile arrows/title row on desktop, show on mobile */
        .slide-title-arrows-mobile {
          display: none;
        }
        .slide-title-desktop {
          display: block;
        }
        @media (max-width: 700px) {
          .slide-title-arrows-mobile {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 0 8px 0;
            z-index: 21;
          }
          .slide-title-desktop {
            display: none !important;
          }
          .carousel-arrow-btn-mobile {
            background: rgba(40,40,40,0.7);
            border: none;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0 8px;
            transition: background 0.2s;
          }
          .carousel-arrow-icon-mobile {
            color: ${gold};
            font-size: 16px;
            transition: transform 0.18s;
          }
          .carousel-arrow-btn-mobile:hover .carousel-arrow-icon-mobile {
            transform: scale(1.18);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
