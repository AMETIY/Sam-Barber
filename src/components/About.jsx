import React from "react";
import aboutImg from "../assets/mine/use/About1.png";

const gold = "#D19D64";
const fontFamily = `'Montserrat', 'Open Sans', Arial, sans-serif`;

const About = () => (
  <section
    id="about"
    style={{
      minHeight: "70vh",
      width: "100%",
      background: "#f7f5f2",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "64px 0",
      fontFamily,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 56,
        maxWidth: 1100,
        width: "100%",
        padding: "0 24px",
        flexWrap: "wrap",
      }}
    >
      {/* Image with gold border on top and left */}
      <div
        style={{
          flex: "0 0 320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 300,
            height: 380,
            borderRadius: 18,
            overflow: "hidden",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 8px 32px 0 rgba(209,157,100,0.13), 0 2px 16px 0 rgba(0,0,0,0.10)`,
            position: "relative",
          }}
        >
          {/* Bold Gold border top and left */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 7,
                background: gold,
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 7,
                height: "100%",
                background: gold,
                borderTopLeftRadius: 18,
                borderBottomLeftRadius: 18,
              }}
            />
          </div>
          <img
            src={aboutImg}
            alt="About Barber Studio"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
              display: "block",
              zIndex: 1,
            }}
          />
        </div>
      </div>
      {/* Text Content */}
      <div
        style={{
          flex: "1 1 400px",
          minWidth: 280,
          paddingLeft: 32,
          paddingRight: 8,
          textAlign: "left",
          color: "#181818",
        }}
      >
        <h2
          style={{
            fontSize: "2.3rem",
            fontWeight: 900,
            letterSpacing: "2px",
            color: gold,
            marginBottom: 12,
            fontFamily,
            textShadow: "0 2px 16px rgba(0,0,0,0.18)",
          }}
        >
          Crafting Excellence Since 2019
        </h2>
        <h3
          style={{
            fontSize: "1.18rem",
            color: gold,
            marginBottom: 18,
            fontWeight: 700,
            letterSpacing: "1.5px",
            fontFamily,
          }}
        >
          Where Tradition Meets Modern Innovation
        </h3>
        <div
          style={{
            width: 48,
            height: 4,
            background: gold,
            borderRadius: 2,
            margin: "0 0 18px 0",
          }}
        />
        <p
          style={{
            fontSize: "1.13rem",
            lineHeight: 1.8,
            color: "#444",
            maxWidth: 600,
            margin: 0,
            fontWeight: 400,
            fontFamily,
          }}
        >
          Step into a world where every haircut is a masterpiece. Our skilled barbers blend time-honored techniques with contemporary trends, creating signature styles that reflect your personality. From classic fades to modern undercuts, we transform your vision into reality with precision and artistry.
        </p>
      </div>
    </div>
    {/* Responsive styles */}
    <style>{`
      @media (max-width: 900px) {
        #about > div {
          flex-direction: column !important;
          gap: 32px !important;
        }
        #about > div > div:first-child {
          margin-bottom: 16px;
        }
        #about > div > div:last-child {
          padding-left: 0 !important;
          text-align: center !important;
        }
      }
    `}</style>
  </section>
);

export default About;
