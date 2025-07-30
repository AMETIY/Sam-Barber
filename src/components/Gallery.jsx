import React, { useState } from "react";
import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";
import gallery4 from "../assets/mine/use/try_3.jpg";
// import gallery5 from "../assets/gallery/gallery5.png";
import homeBlog1 from "../assets/mine/use/try_2.jpg";
import homeBlog2 from "../assets/mine/use/try.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  homeBlog1,
  homeBlog2,
];
const gold = "#D19D64";

const Gallery = () => {
  const [modal, setModal] = useState({ open: false, idx: 0 });
  return (
    <section
      id="gallery"
      style={{
        background: "#f7f5f2",
        padding: "80px 0 60px 0",
        minHeight: 600,
        fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
              color: "#181818",
              letterSpacing: 2,
              margin: 0,
              textShadow: "0 2px 16px rgba(0,0,0,0.08)",
            }}
          >
            OUR PORTFOLIO
          </h2>
          <p
            style={{
              color: "#444",
              fontSize: "1.15rem",
              margin: "18px auto 0 auto",
              maxWidth: 700,
              fontWeight: 400,
            }}
          >
            Discover our craftsmanship through stunning transformations and behind-the-scenes moments.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
                cursor: "pointer",
                background: "#fff",
              }}
              onClick={() => setModal({ open: true, idx })}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(209,157,100,0.08)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="gallery-hover-overlay"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal Lightbox */}
      {modal.open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(24,24,24,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setModal({ open: false, idx: 0 })}
        >
          <img
            src={images[modal.idx]}
            alt="Gallery Large"
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              borderRadius: 18,
              boxShadow: `0 8px 32px 0 ${gold}`,
            }}
          />
        </div>
      )}
      {/* Hover effect styling */}
      <style>{`
        .gallery-hover-overlay:hover {
          opacity: 1 !important;
        }
        section#gallery div[style*='cursor: pointer'] img:hover {
          transform: scale(1.04);
          box-shadow: 0 4px 24px 0 ${gold}33;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
