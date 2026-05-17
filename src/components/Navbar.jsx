import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        🌍 VoyageVault
      </div>
      <div style={styles.links}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#explore" style={styles.link}>Explore</a>
        <a href="#about" style={styles.link}>About</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#2e7d32",
    letterSpacing: "0.5px",
  },
  links: {
    display: "flex",
    gap: "28px",
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontSize: "15px",
    fontWeight: "500",
  },
};
