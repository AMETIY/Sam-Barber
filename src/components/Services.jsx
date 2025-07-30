import React from "react";
import {
  GiRazor,
  GiComb,
  GiBeard,
  GiScissors,
  GiDrop,
  GiMustache,
  GiHairStrands,
  GiWaterDrop,
} from "react-icons/gi";
import { MdFaceRetouchingNatural, MdColorLens } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import bgImg from "../assets/mine/use/About1.png";

const gold = "#D19D64";
const services = [
  {
    icon: <GiScissors size={48} color={gold} />,
    title: "Men Haircut",
    desc: "Professional men's haircut with styling and consultation.",
    price: "$35.00",
  },
  {
    icon: <GiBeard size={48} color={gold} />,
    title: "Beard Trim and Line Up",
    desc: "Precise beard trimming and line up for a clean, defined look.",
    price: "$25.00",
  },
  {
    icon: <GiHairStrands size={48} color={gold} />,
    title: "Hair Tattoo",
    desc: "Creative hair designs and patterns for a unique style.",
    price: "$10.00",
  },
  {
    icon: <GiRazor size={48} color={gold} />,
    title: "Bold Shaving with Blade",
    desc: "Traditional straight razor shave for the closest, smoothest finish.",
    price: "$35.00",
  },
  {
    icon: <GiRazor size={48} color={gold} />,
    title: "Bold Shaving with Trimmer",
    desc: "Precise shaving using professional trimmers for clean lines.",
    price: "$30.00",
  },
  {
    icon: <GiScissors size={48} color={gold} />,
    title: "Buzz Cut",
    desc: "Classic short haircut using clippers for a clean, military-style look.",
    price: "$30.00",
  },
  {
    icon: <FaChild size={48} color={gold} />,
    title: "Child Haircut",
    desc: "Gentle and patient haircuts for children of all ages.",
    price: "$30.00",
  },
  {
    icon: <GiComb size={48} color={gold} />,
    title: "Seniors Cut",
    desc: "Specialized haircuts designed for senior clients with comfort in mind.",
    price: "$30.00",
  },
  {
    icon: <GiWaterDrop size={48} color={gold} />,
    title: "Shampooing",
    desc: "Professional hair washing and scalp treatment.",
    price: "$10.00",
  },
  {
    icon: <GiDrop size={48} color={gold} />,
    title: "Wax",
    desc: "Hair removal and styling using professional waxing techniques.",
    price: "$10.00",
  },
  {
    icon: <GiScissors size={48} color={gold} />,
    title: "Zero Fade",
    desc: "Ultra-short fade haircut for a bold, modern look.",
    price: "$40.00",
  },
  {
    icon: <GiBeard size={48} color={gold} />,
    title: "Zero Fade and Beard",
    desc: "Zero fade haircut combined with beard trimming and styling.",
    price: "$45.00",
  },
  {
    icon: <GiScissors size={48} color={gold} />,
    title: "Fade Haircut and Beard",
    desc: "Modern fade haircut with complementary beard grooming.",
    price: "$45.00",
  },
  {
    icon: <GiRazor size={48} color={gold} />,
    title: "Fade Haircut and Trimming the Beard",
    desc: "Fade haircut with detailed beard trimming and line up.",
    price: "$40.00",
  },
  {
    icon: <MdColorLens size={48} color={gold} />,
    title: "Black Colour",
    desc: "Professional hair coloring with premium black dye.",
    price: "$30.00",
  },
  {
    icon: <MdColorLens size={48} color={gold} />,
    title: "Black Dye with Haircut",
    desc: "Complete service including haircut and black hair coloring.",
    price: "$55.00",
  },
  {
    icon: <GiDrop size={48} color={gold} />,
    title: "Scrub",
    desc: "Deep cleansing scalp treatment for healthy hair and skin.",
    price: "$10.00",
  },
];

const Services = () => (
  <section
    id="services"
    style={{
      position: "relative",
      width: "100%",
      background: "#181818",
      padding: "80px 0 60px 0",
      overflow: "hidden",
      fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
    }}
  >
    {/* Responsive styles for Services */}
    <style>{`
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 40px;
        background: rgba(255,255,255,0.92);
        border-radius: 18px;
        box-shadow: 0 4px 32px 0 rgba(0,0,0,0.07);
        padding: 32px;
      }
      .service-card {
        display: flex;
        align-items: flex-start;
        gap: 24px;
      }
      @media (max-width: 700px) {
        .services-grid {
          gap: 20px;
          padding: 16px;
        }
        .service-card {
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }
        .service-card h3 {
          font-size: 1.08rem !important;
        }
        .service-card p {
          font-size: 0.98rem !important;
        }
      }
      @media (max-width: 420px) {
        .services-grid {
          grid-template-columns: 1fr;
          padding: 8px;
        }
        .service-card {
          gap: 8px;
        }
      }
    `}</style>
    {/* Transparent background image overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `url(${bgImg}) center center/cover no-repeat`,
        opacity: 0.08,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
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
        <GiMustache size={36} color={gold} style={{ marginBottom: 8 }} />
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 2,
            margin: 0,
            textShadow: "0 2px 16px rgba(0,0,0,0.18)",
          }}
        >
          OUR SERVICES
        </h2>
        <p
          style={{
            color: "#eee",
            fontSize: "1.15rem",
            margin: "18px auto 0 auto",
            maxWidth: 700,
            fontWeight: 400,
          }}
        >
          Experience top-notch grooming and haircare in a modern, welcoming
          environment. Our skilled barbers offer classic haircuts, beard trims,
          and personalized styling to help you look and feel your best.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div style={{ flexShrink: 0 }}>{s.icon}</div>
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  color: "#181818",
                  margin: 0,
                  letterSpacing: 1,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "#444",
                  fontSize: "1.05rem",
                  margin: "10px 0 0 0",
                  fontWeight: 400,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  color: gold,
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  marginTop: 16,
                }}
              >
                {s.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
