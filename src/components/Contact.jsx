import React from "react";
import bgImg from "../assets/gallery/contact_bg.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiScissors } from "react-icons/gi";

const gold = "#D19D64";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt color={gold} size={22} />,
    label: "Address",
    value: "1181 11 Ave SW, Calgary, AB T2R 1KG",
    type: "address",
  },
  {
    icon: <FaPhoneAlt color={gold} size={22} />,
    label: "Phone",
    value: "+1 587-917-8258",
    type: "phone",
    link: "tel:+19876543210",
  },
  {
    icon: <FaEnvelope color={gold} size={22} />,
    label: "Email",
    value: "samddsquare@gmail.com",
    type: "email",
    link: "mailto:samddsquare@gmail.com",
  },
];

const Contact = () => (
  <section
    id="contact"
    style={{
      position: "relative",
      background: "#EDEDED",
      padding: 0,
      minHeight: 500,
      fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Title and Icon */}
    <div
      style={{ width: "100%", textAlign: "center", margin: "48px 0 24px 0" }}
    >
      <h2
        style={{
          color: "#181818",
          fontWeight: 900,
          fontSize: "3rem",
          letterSpacing: 4,
          margin: 0,
          fontFamily: "'Oswald', 'Montserrat', 'Poppins', Arial, sans-serif",
        }}
      >
        GET IN TOUCH
      </h2>
      <div style={{ marginTop: 18 }}>
        <GiScissors size={38} color={gold} style={{ margin: "0 8px" }} />
        <GiScissors
          size={38}
          color={gold}
          style={{ margin: "0 8px", transform: "scaleX(-1)" }}
        />
      </div>
    </div>
    <style>{`
      .contact-block {
        width: 100vw;
        max-width: 100vw;
        margin-left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        padding-left: 0;
        padding-right: 0;
      }
      @media (max-width: 700px) {
        .contact-block {
          border-radius: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      }
    `}</style>
    <div
      style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 48,
        alignItems: "stretch",
        justifyContent: "center",
        background: "none",
        borderRadius: 0,
        boxShadow: "none",
        padding: 0,
      }}
    >
      {/* Contact Details Card */}
      {/* Google Fonts for Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Responsive styles for Contact Card */}
      <style>{`
        .contact-details-card {
          font-family: 'Poppins', 'Montserrat', 'Open Sans', Arial, sans-serif;
          width: 100%;
          min-height: 380px;
          background: url(${bgImg}) center -120px/cover no-repeat;
          background-blend-mode: overlay;
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 ${gold}55;
          border: 2.5px solid ${gold};
          padding: 48px 40px 40px 40px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          .contact-details-card {
            min-height: 220px;
            padding: 24px 10px 20px 10px;
            gap: 12px;
            background-position: center top;
          }
          .contact-details-card .contact-info-row {
            font-size: 1rem !important;
          }
          .contact-details-card .contact-info-label {
            min-width: 60px !important;
            font-size: 1.01rem !important;
          }
        }
      `}</style>
      <div className="contact-details-card">
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.04)",
            zIndex: 1,
            borderRadius: 24,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginTop: 0,
            textShadow: "0 3px 16px rgba(0,0,0,0.32)",
          }}
        >
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="contact-info-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: "1.13rem",
                fontWeight: 500,
              }}
            >
              {info.icon}
              <span
                className="contact-info-label"
                style={{ color: gold, fontWeight: 700, minWidth: 80 }}
              >
                {info.label}:
              </span>
              {info.type === "phone" ? (
                <a
                  href={info.link}
                  style={{
                    color: "#181818",
                    opacity: 0.92,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {info.value}
                </a>
              ) : info.type === "email" ? (
                <a
                  href={info.link}
                  style={{
                    color: "#181818",
                    opacity: 0.92,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {info.value}
                </a>
              ) : (
                <span style={{ color: "#181818", opacity: 0.92 }}>
                  {info.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Google Map - plain background, no image */}
      <div
        style={{
          width: "100%",
          borderRadius: 0,
          overflow: "hidden",
          boxShadow: `0 4px 32px 0 ${gold}22`,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <iframe
          title="Barber Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.557711241245!2d-114.08859369999999!3d5104278909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x53716f2531b4c661%3A0xf63cb2149f4b549a!2sSola%20Salon%20Studios!5e0!3m2!1sen!2sca!4v1752452135278!5m2!1sen!2sca"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
