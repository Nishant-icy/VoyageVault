import React from "react";
import SpotCard from "./SpotCard";

export default function SpotGrid({ spots }) {
  if (spots.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>😕 No destinations found. Try a different search or filter!</p>
      </div>
    );
  }

  return (
    <section id="explore" style={styles.section}>
      <h2 style={styles.heading}>
        Recommended Destinations
        <span style={styles.count}> ({spots.length} found)</span>
      </h2>
      <div style={styles.grid}>
        {spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "36px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "24px",
  },
  count: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#888",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  empty: {
    padding: "60px 20px",
    textAlign: "center",
  },
  emptyText: {
    fontSize: "18px",
    color: "#888",
  },
};
