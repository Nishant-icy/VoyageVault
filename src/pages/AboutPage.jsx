import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About VoyageVault 🌍</h1>
        <p style={styles.heroSub}>
          Your go-to guide for discovering the best travel destinations across India
        </p>
      </div>

      <div style={styles.container}>
        {/* What is VoyageVault */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What is VoyageVault?</h2>
          <p style={styles.text}>
            VoyageVault is a travel recommendation website that helps you discover the most amazing tourist spots across India.
            Whether you're planning a trip to the snowy mountains of Ladakh, the peaceful backwaters of Kerala, or the vibrant beaches of Goa —
            VoyageVault makes it easy to find the right destination for you.
          </p>
          <p style={styles.text}>
            We built this platform to make travel planning simple. Instead of spending hours searching the internet,
            you can browse, filter, and explore destinations all in one place.
          </p>
        </section>

        {/* Features cards */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What We Offer</h2>
          <div style={styles.grid}>
            {features.map((f) => (
              <div key={f.title} style={styles.featureCard}>
                <span style={styles.featureIcon}>{f.icon}</span>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section style={styles.statsSection}>
          <div style={styles.stat}>
            <span style={styles.statNum}>12+</span>
            <span style={styles.statLabel}>Destinations</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNum}>6</span>
            <span style={styles.statLabel}>Categories</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNum}>28</span>
            <span style={styles.statLabel}>States Covered</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNum}>100%</span>
            <span style={styles.statLabel}>Free to Use</span>
          </div>
        </section>

        {/* Mission */}
        <section style={{ ...styles.section, ...styles.missionBox }}>
          <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>Our Mission</h2>
          <p style={{ ...styles.text, color: "rgba(255,255,255,0.9)" }}>
            India is one of the most diverse and beautiful countries in the world — and we want everyone to explore it.
            Our mission is to inspire travel, make trip planning easy, and help people discover hidden gems and iconic landmarks alike.
          </p>
          <button
            onClick={() => navigate("/explore")}
            style={styles.ctaBtn}
          >
            Start Exploring →
          </button>
        </section>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "🗺️",
    title: "Smart Recommendations",
    desc: "Curated list of top tourist spots across India, selected for their beauty, culture and uniqueness.",
  },
  {
    icon: "🔍",
    title: "Easy Search & Filter",
    desc: "Filter destinations by category (Beach, Mountains, Heritage) and budget (Low, Medium, High).",
  },
  {
    icon: "❤️",
    title: "Wishlist Feature",
    desc: "Save your favourite destinations by clicking the heart button on any card.",
  },
  {
    icon: "📅",
    title: "Best Time to Visit",
    desc: "Every destination shows the best time to visit so you can plan your trip perfectly.",
  },
  {
    icon: "💸",
    title: "Budget Friendly",
    desc: "Many of our top picks are low-budget destinations, perfect for students and budget travellers.",
  },
  {
    icon: "🔐",
    title: "Secure Login",
    desc: "Create your own account to save your wishlist and get a personalised experience.",
  },
];

const styles = {
  page: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  hero: {
    backgroundColor: "#1b5e20",
    color: "#fff",
    padding: "60px 40px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "800",
    margin: "0 0 14px",
  },
  heroSub: {
    fontSize: "17px",
    opacity: 0.85,
    maxWidth: "560px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 24px",
  },
  section: {
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "16px",
  },
  text: {
    color: "#555",
    fontSize: "15px",
    lineHeight: 1.8,
    marginBottom: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
  },
  featureIcon: {
    fontSize: "30px",
    display: "block",
    marginBottom: "12px",
  },
  featureTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#222",
    margin: "0 0 8px",
  },
  featureDesc: {
    fontSize: "13px",
    color: "#666",
    lineHeight: 1.6,
    margin: 0,
  },
  statsSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "36px 24px",
    marginBottom: "48px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "120px",
  },
  statNum: {
    fontSize: "40px",
    fontWeight: "800",
    color: "#2e7d32",
  },
  statLabel: {
    fontSize: "14px",
    color: "#888",
    marginTop: "4px",
  },
  missionBox: {
    backgroundColor: "#1b5e20",
    borderRadius: "14px",
    padding: "40px",
    marginBottom: "0",
  },
  ctaBtn: {
    marginTop: "20px",
    padding: "13px 32px",
    backgroundColor: "#fff",
    color: "#1b5e20",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
  },
};
