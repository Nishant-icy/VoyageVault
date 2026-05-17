import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>🌍 VoyageVault</h3>
          <p style={styles.tagline}>Your personal travel recommendation guide for India.</p>
        </div>
        <div style={styles.links}>
          <p style={styles.linksTitle}>Quick Links</p>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/explore" style={styles.link}>Explore</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/login" style={styles.link}>Login / Sign Up</Link>
        </div>
        <div style={styles.info}>
          <p style={styles.text}>
            VoyageVault helps you discover the most incredible travel destinations across India.
            From the snow-capped Himalayas to the beaches of Goa and Andaman, find your perfect getaway.
          </p>
        </div>
      </div>
      <p style={styles.copy}>© 2025 VoyageVault — Made with ❤️ for travel lovers</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1b5e20",
    color: "#fff",
    padding: "40px 40px 20px",
    marginTop: "40px",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto 30px",
    justifyContent: "space-between",
  },
  brand: {
    flex: "1",
    minWidth: "180px",
  },
  logo: {
    margin: "0 0 8px",
    fontSize: "22px",
    fontWeight: "700",
  },
  tagline: {
    opacity: 0.8,
    fontSize: "14px",
    margin: 0,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "120px",
  },
  linksTitle: {
    fontWeight: "700",
    fontSize: "14px",
    margin: "0 0 4px",
  },
  link: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "14px",
  },
  info: {
    flex: "2",
    minWidth: "220px",
  },
  text: {
    opacity: 0.8,
    fontSize: "14px",
    lineHeight: 1.7,
    margin: 0,
  },
  copy: {
    textAlign: "center",
    opacity: 0.6,
    fontSize: "13px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "20px",
    margin: "0 auto",
    maxWidth: "1200px",
  },
};
