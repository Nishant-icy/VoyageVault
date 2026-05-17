import React from "react";
import { categories, budgets } from "../data/spots";

export default function Filters({ activeCategory, setActiveCategory, activeBudget, setActiveBudget }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.group}>
        <span style={styles.label}>Category:</span>
        <div style={styles.pills}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...styles.pill,
                ...(activeCategory === cat ? styles.activePill : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div style={styles.group}>
        <span style={styles.label}>Budget:</span>
        <div style={styles.pills}>
          {budgets.map((b) => (
            <button
              key={b}
              onClick={() => setActiveBudget(b)}
              style={{
                ...styles.pill,
                ...(activeBudget === b ? styles.activePill : {}),
              }}
            >
              {b === "Low" ? "💸 Low" : b === "Medium" ? "💰 Medium" : b === "High" ? "💎 High" : b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #eee",
  },
  group: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    fontWeight: "600",
    fontSize: "14px",
    color: "#555",
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  pill: {
    padding: "6px 16px",
    borderRadius: "20px",
    border: "1.5px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    color: "#555",
    transition: "all 0.2s",
  },
  activePill: {
    backgroundColor: "#2e7d32",
    borderColor: "#2e7d32",
    color: "#fff",
  },
};
