import React from "react";

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <p style={styles.subtitle}>Your personal travel guide ✈️</p>
        <h1 style={styles.heading}>
          Find Your Next <br />
          <span style={styles.highlight}>Adventure</span>
        </h1>
        <p style={styles.desc}>
          Discover amazing tourist spots around the world — from beaches to mountains, cities to hidden gems.
        </p>
        <div style={styles.searchBar}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search destinations... (e.g. Bali, Paris, Adventure)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.input}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "520px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.48)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    color: "#fff",
    padding: "0 20px",
    maxWidth: "680px",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "10px",
    opacity: 0.85,
    letterSpacing: "1px",
  },
  heading: {
    fontSize: "52px",
    fontWeight: "800",
    margin: "0 0 16px",
    lineHeight: 1.15,
  },
  highlight: {
    color: "#66bb6a",
  },
  desc: {
    fontSize: "17px",
    opacity: 0.9,
    marginBottom: "32px",
    lineHeight: 1.6,
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "40px",
    padding: "12px 20px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  searchIcon: {
    fontSize: "18px",
    marginRight: "10px",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "15px",
    width: "100%",
    color: "#333",
    backgroundColor: "transparent",
  },
};
