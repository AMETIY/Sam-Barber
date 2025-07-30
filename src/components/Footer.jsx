import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const gold = "#D19D64";
const socialLinks = [
  { icon: <FaFacebook />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
];

const Footer = () => (
  <footer
    style={{
      width: "100%",
      background: "#181818",
      color: gold,
      padding: "20px 0 18px 0",
      fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
      fontSize: "1.13rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      borderTop: "2px solid #22223b",
      marginTop: 0,
      position: "relative",
      minHeight: 50,
    }}
  >
    {/* Social icon hover styles */}
    <style>{`
      .footer-social-link {
        color: ${gold};
        font-size: 22px;
        transition: color 0.2s, transform 0.2s;
        display: inline-flex;
        align-items: center;
      }
      .footer-social-link:hover {
        color: #fff;
        transform: scale(1.18);
      }
      .footer-copyright {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${gold};
        font-size: 1.08rem;
        font-weight: 500;
        letter-spacing: 1.2px;
        pointer-events: none;
        user-select: none;
        font-family: inherit;
      }
    `}</style>
    {/* Copyright center */}
    <div className="footer-copyright">
      &copy; {new Date().getFullYear()} AW. All rights reserved.
    </div>
    <div
      style={{
        display: "flex",
        gap: 18,
        alignItems: "center",
        marginRight: 36,
      }}
    >
      {socialLinks.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          {s.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
