import React, { useState } from "react";

export default function SpotCard({ spot }) {
  const [liked, setLiked] = useState(false);

  const budgetColor = {
    Low: "#43a047",
    Medium: "#fb8c00",
    High: "#e53935",
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageWrap}>
        <img src={spot.image} alt={spot.name} style={styles.image} />
        <button
          onClick={() => setLiked(!liked)}
          style={styles.likeBtn}
          title={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          {liked ? "❤️" : "🤍"}
        </button>
        <span style={{ ...styles.budgetBadge, backgroundColor: budgetColor[spot.budget] }}>
          {spot.budget} Budget
        </span>
      </div>
      <div style={styles.body}>
        <div style={styles.topRow}>
          <h3 style={styles.name}>{spot.name}</h3>
          <span style={styles.rating}>⭐ {spot.rating}</span>
        </div>
        <p style={styles.country}>📍 {spot.state}</p>
        <p style={styles.desc}>{spot.description}</p>
        <p style={styles.bestTime}>🗓️ Best time: <strong>{spot.bestTime}</strong></p>
        <div style={styles.tags}>
          {spot.tags.map((tag) => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  imageWrap: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  likeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(255,255,255,0.85)",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  budgetBadge: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "700",
    padding: "3px 10px",
    borderRadius: "10px",
    letterSpacing: "0.4px",
  },
  body: {
    padding: "16px",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "4px",
  },
  name: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "700",
    color: "#222",
  },
  rating: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#555",
  },
  country: {
    margin: "0 0 8px",
    color: "#888",
    fontSize: "13px",
  },
  desc: {
    color: "#555",
    fontSize: "13px",
    lineHeight: 1.55,
    margin: "0 0 10px",
  },
  bestTime: {
    fontSize: "13px",
    color: "#555",
    margin: "0 0 12px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  tag: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "10px",
    fontWeight: "600",
  },
};
