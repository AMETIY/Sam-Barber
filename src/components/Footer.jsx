import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const gold = "#D19D64";
const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/share/18GMZ6NWoj/?mibextid=wwXIfr",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/samdbarberstudio/profilecard/?igsh=MTVhdXJlbmNyOHltYg==",
  },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@samdbarberstudio?_t=ZS-8yT9I8zTGew&_r=1" },
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
    `}</style>
    {/* Copyright left */}
    <div
      style={{
        color: gold,
        fontSize: "1.08rem",
        fontWeight: 500,
        letterSpacing: "1.2px",
        marginLeft: 36,
      }}
    >
      &copy; {new Date().getFullYear()} Modern Barber Shop. Crafting Excellence
      Since 2019.
    </div>
    <div
      style={{
        display: "flex",
        gap: 18,
        alignItems: "center",
        marginLeft: "auto",
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
