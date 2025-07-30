import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/logo/Logo1.png";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Gallery", to: "gallery" },
  { label: "Pricing", to: "pricing" },
  { label: "Appointment", to: "appointment" },
  { label: "Contact", to: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Google Fonts for Open Sans */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#181818",
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          fontFamily: "Open Sans, Arial, sans-serif",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <nav
          className="header-nav-bar"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 70,
            fontFamily: "Open Sans, Arial, sans-serif",
            position: "relative",
          }}
        >
          {/* Left nav */}
          <ul
            className="header-nav-list header-nav-list-left"
            style={{
              display: "flex",
              gap: "1.1rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontFamily: "Open Sans, Arial, sans-serif",
              justifyContent: "flex-end",
              fontSize: "0.97rem",
              fontWeight: 600,
            }}
          >
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
              <li key={link.to} style={{ position: "relative" }}>
                <a
                  href={`#${link.to}`}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="header-nav-link"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "1.5px",
                    fontFamily: "Open Sans, Arial, sans-serif",
                    position: "relative",
                    padding: "0.18rem 0.7rem",
                    transition: "color 0.2s, background 0.2s",
                    display: "inline-block",
                    borderRadius: 6,
                    textShadow: "0 1px 8px rgba(0,0,0,0.10)",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Logo center */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 32px",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Back to top"
          >
            <img
              src={logo1}
              alt="Logo"
              style={{
                height: 44,
                width: 44,
                display: "block",
                borderRadius: 8,
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
              }}
            />
          </div>
          {/* Right nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1.1rem",
            }}
          >
            <ul
              className="header-nav-list header-nav-list-right"
              style={{
                display: "flex",
                gap: "1.1rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
                fontFamily: "Open Sans, Arial, sans-serif",
                fontSize: "0.97rem",
                fontWeight: 600,
              }}
            >
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                <li key={link.to} style={{ position: "relative" }}>
                  <a
                    href={`#${link.to}`}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="header-nav-link"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      letterSpacing: "1.5px",
                      fontFamily: "Open Sans, Arial, sans-serif",
                      position: "relative",
                      padding: "0.18rem 0.7rem",
                      transition: "color 0.2s, background 0.2s",
                      display: "inline-block",
                      borderRadius: 6,
                      textShadow: "0 1px 8px rgba(0,0,0,0.10)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Remove Join Us button here */}
            {/* Hamburger icon for mobile */}
            <button
              className="header-hamburger"
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 32,
                marginLeft: 16,
                cursor: "pointer",
                zIndex: 220, // above overlay
                position: "static",
              }}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div
              className="header-mobile-menu"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(24, 18, 8, 0.98)",
                zIndex: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: 80,
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  width: "90%",
                }}
              >
                {navLinks.map((link) => (
                  <li
                    key={link.to}
                    style={{ borderBottom: "1px solid #a98c5c", width: "100%" }}
                  >
                    <a
                      href={`#${link.to}`}
                      onClick={(e) => handleNavClick(e, link.to)}
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        display: "block",
                        fontSize: 18,
                        fontFamily: "Open Sans, sans-serif",
                        padding: "18px 0",
                        textDecoration: "none",
                        width: "100%",
                        textAlign: "center",
                        letterSpacing: 1,
                        background: "none",
                        transition: "background 0.2s, color 0.2s",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <style>{`
          .header-nav-link {
            position: relative;
          }
          .header-nav-link::before,
          .header-nav-link::after {
            content: '';
            position: absolute;
            left: 50%;
            width: 18px;
            height: 2px;
            background: #D19D64;
            opacity: 0;
            transform: translateX(-50%) skew(-20deg);
            transition: opacity 0.2s, top 0.2s, bottom 0.2s;
          }
          .header-nav-link::before {
            top: -10px;
          }
          .header-nav-link::after {
            bottom: -10px;
          }
          .header-nav-link:hover,
          .header-nav-link:focus {
            color: #D19D64 !important;
            background: rgba(209,157,100,0.08);
          }
          .header-nav-link:hover::before,
          .header-nav-link:hover::after,
          .header-nav-link:focus::before,
          .header-nav-link:focus::after {
            opacity: 1;
          }
          .header-nav-link.active,
          .header-nav-link[aria-current="page"] {
            color: #D19D64 !important;
            background: rgba(209,157,100,0.13);
          }
          .header-nav-link.active::before,
          .header-nav-link.active::after,
          .header-nav-link[aria-current="page"]::before,
          .header-nav-link[aria-current="page"]::after {
            opacity: 1;
          }
          .header-joinus-btn {
            /* Hide Join Us button on mobile */
            display: flex;
          }
          @media (max-width: 900px) {
            .header-nav-list,
            .header-nav-list-left,
            .header-nav-list-right {
              display: none !important;
            }
            .header-joinus-btn {
              display: none !important;
            }
            .header-hamburger {
              display: block !important;
              position: absolute !important;
              top: 18px;
              right: 5vw;
              margin-left: 0 !important;
            }
          }
          @media (min-width: 901px) {
            .header-hamburger {
              display: none !important;
              position: static !important;
            }
            .header-joinus-btn {
              display: flex !important;
            }
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
