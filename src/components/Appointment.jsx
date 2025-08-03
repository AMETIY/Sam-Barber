import React, { useState } from "react";
import { GiScissors } from "react-icons/gi";
import bgImg from "../assets/gallery/appointment_bg.jpg";
import emailjs from "@emailjs/browser";

const gold = "#D19D64";
const services = [
  "Men Haircut",
  "Beard Trim and Line Up",
  "Hair Tattoo",
  "Bold Shaving with Blade",
  "Bold Shaving with Trimmer",
  "Buzz Cut",
  "Child Haircut",
  "Seniors Cut",
  "Shampooing",
  "Wax",
  "Zero Fade",
  "Zero Fade and Beard",
  "Fade Haircut and Beard",
  "Fade Haircut and Trimming the Beard",
  "Black Colour",
  "Black Dye with Haircut",
  "Scrub",
];
const hours = [
  { day: "MONDAY", time: "10AM–9PM" },
  { day: "TUESDAY", time: "10AM–9PM" },
  { day: "WEDNESDAY", time: "10AM–9PM" },
  { day: "THURSDAY", time: "10AM–9PM" },
  { day: "FRIDAY", time: "10AM–9PM" },
  { day: "SATURDAY", time: "10AM–7PM" },
  { day: "SUNDAY", time: "CLOSED" },
];

const Appointment = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // EmailJS configuration
      const templateParams = {
        to_name: "Barber Shop",
        to_email: "samddsquare@gmail.com",
        from_name: e.target.name.value,
        from_email: e.target.email.value,
        phone: e.target.phone.value,
        service: e.target.service.value,
        date: e.target.date.value,
        time: e.target.time.value,
        message: e.target.message.value || "No message provided",
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        e.target.reset();
        console.log("✅ Email sent successfully via EmailJS!");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section
      id="appointment"
      style={{
        position: "relative",
        background: "#EDEDED",
        padding: "0",
        minHeight: 600,
        fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
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
          MAKE AN APPOINTMENT
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
      {/* Flex row for columns */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          minHeight: 600,
          boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
          background: `url(${bgImg}) center center/cover no-repeat`,
          backgroundColor: "transparent",
        }}
      >
        {/* Opening Hours */}
        <div
          style={{
            flex: 1,
            color: "#fff",
            padding: "56px 32px 56px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 260,
            background: "rgba(24,24,24,0.72)",
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
          }}
        >
          <div
            style={{
              color: gold,
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: 2,
              marginBottom: 18,
            }}
          >
            OPENING HOURS
          </div>
          <div
            style={{
              width: 60,
              height: 4,
              background: gold,
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {hours.map((h) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: "1.08rem",
                  borderBottom: "1px dotted #444",
                  padding: "6px 0",
                }}
              >
                <span style={{ color: "#fff", opacity: 0.92 }}>{h.day}</span>
                <span
                  style={{
                    color: h.time === "CLOSED" ? "#c00" : gold,
                    fontWeight: 900,
                  }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Appointment Form */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 32px",
            minWidth: 320,
            background: "rgba(255,255,255,0.92)",
            borderTopRightRadius: 18,
            borderBottomRightRadius: 18,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.97)",
              borderRadius: 18,
              boxShadow: `0 4px 32px 0 ${gold}22`,
              maxWidth: 420,
              width: "100%",
              padding: "36px 28px 28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#181818",
                fontWeight: 900,
                fontSize: "2.1rem",
                marginBottom: 8,
                letterSpacing: 2,
              }}
            >
              Book Now
            </h2>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <GiScissors size={32} color="#181818" />
            </div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              style={inputStyle}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              style={inputStyle}
            />
            <select name="service" required style={inputStyle} defaultValue="">
              <option value="" disabled>
                Choose Service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                name="date"
                type="date"
                required
                style={{ ...inputStyle, flex: 1 }}
              />
              <input
                name="time"
                type="time"
                required
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#181818",
                color: gold,
                fontWeight: 900,
                fontSize: "1.13rem",
                border: "none",
                borderRadius: 8,
                padding: "14px 0",
                marginTop: 8,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: `0 2px 12px 0 ${gold}33`,
                letterSpacing: 1.5,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
            {status === "success" && (
              <div
                style={{
                  color: gold,
                  textAlign: "center",
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                Appointment request sent! We’ll contact you soon.
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  color: "#c00",
                  textAlign: "center",
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          #appointment > div {
            flex-direction: column !important;
            min-width: 0 !important;
          }
          #appointment > div > div {
            min-width: 0 !important;
            padding: 32px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

const inputStyle = {
  fontSize: "1.08rem",
  padding: "12px 14px",
  borderRadius: 8,
  border: `1.5px solid #e0e0e0`,
  outline: "none",
  fontWeight: 500,
  color: "#181818",
  background: "#fff",
  margin: 0,
  transition: "border 0.2s",
  marginBottom: 0,
};

export default Appointment;
