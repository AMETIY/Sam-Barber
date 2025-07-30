import React, { useState } from "react";
import pricingBg from "../assets/gallery/pricing1.png";
import { FaCheckCircle } from "react-icons/fa";

const gold = "#D19D64";
const plans = [
  {
    title: "Essential",
    price: "$30",
    features: [
      "Men Haircut",
      "Beard Trim and Line Up",
      "Buzz Cut",
      "Child Haircut",
    ],
    featured: false,
  },
  {
    title: "Professional",
    price: "$40",
    features: [
      "Men Haircut",
      "Beard Trim and Line Up",
      "Bold Shaving with Blade",
      "Zero Fade",
      "Fade Haircut and Trimming the Beard",
    ],
    featured: true,
  },
  {
    title: "Premium",
    price: "$55",
    features: [
      "Black Dye with Haircut",
      "Zero Fade and Beard",
      "Fade Haircut and Beard",
      "Bold Shaving with Blade",
      "Professional Styling",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const [selected, setSelected] = useState(1); // Default to Standard

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        width: "100%",
        background: "#181818",
        padding: "80px 0 60px 0",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
      }}
    >
      {/* Subtle background accent */}
      <img
        src={pricingBg}
        alt="Pricing Accent"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          opacity: 0.07,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
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
            VALUE PACKAGES
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
            Discover our curated packages designed to deliver exceptional value.
            Each tier combines our most popular services with expert
            craftsmanship, ensuring you get the perfect look at the best price.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={plan.title}
                onClick={() => setSelected(i)}
                style={{
                  background: plan.featured ? "#fff" : "rgba(255,255,255,0.93)",
                  color: plan.featured ? "#181818" : "#222",
                  borderRadius: 18,
                  boxShadow: isSelected
                    ? `0 8px 32px 0 ${gold}66, 0 2px 16px 0 rgba(0,0,0,0.10)`
                    : plan.featured
                      ? `0 8px 32px 0 ${gold}33`
                      : "0 2px 16px 0 rgba(0,0,0,0.07)",
                  border: isSelected
                    ? `3.5px solid ${gold}`
                    : plan.featured
                      ? `2.5px solid ${gold}`
                      : "2px solid #eee",
                  minWidth: 280,
                  maxWidth: 340,
                  flex: "1 1 300px",
                  padding: "38px 32px 32px 32px",
                  marginTop: plan.featured ? -24 : 0,
                  zIndex: 3,
                  position: "relative",
                  transition: "transform 0.2s, box-shadow 0.2s, border 0.2s",
                  transform: isSelected
                    ? "scale(1.08)"
                    : plan.featured
                      ? "scale(1.06)"
                      : "none",
                  cursor: "pointer",
                  outline: isSelected ? `2.5px solid ${gold}` : "none",
                }}
              >
                {isSelected && (
                  <FaCheckCircle
                    size={32}
                    color={gold}
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      zIndex: 10,
                      background: "#fff",
                      borderRadius: "50%",
                      boxShadow: `0 2px 8px 0 ${gold}33`,
                    }}
                  />
                )}
                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 900,
                    letterSpacing: 1,
                    margin: 0,
                    color: plan.featured ? gold : "#181818",
                  }}
                >
                  {plan.title}
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: plan.featured ? gold : "#181818",
                    margin: "18px 0 12px 0",
                  }}
                >
                  {plan.price}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginBottom: 18,
                  }}
                >
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "1.08rem",
                        color: plan.featured ? "#222" : "#444",
                        margin: "10px 0",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: gold,
                          fontWeight: 900,
                          fontSize: "1.1rem",
                        }}
                      >
                        •
                      </span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToAppointment}
                  style={{
                    background: plan.featured ? gold : "#181818",
                    color: plan.featured ? "#181818" : "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "12px 32px",
                    fontWeight: 900,
                    fontSize: "1.08rem",
                    letterSpacing: 1.5,
                    marginTop: 8,
                    cursor: "pointer",
                    boxShadow: plan.featured
                      ? `0 2px 12px 0 ${gold}33`
                      : "0 1px 4px 0 rgba(0,0,0,0.07)",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
