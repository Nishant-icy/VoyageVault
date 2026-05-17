import React, { useState, useMemo } from "react";
import Filters from "../components/Filters";
import SpotGrid from "../components/SpotGrid";
import { spots } from "../data/spots";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");

  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        q === "" ||
        spot.name.toLowerCase().includes(q) ||
        spot.state.toLowerCase().includes(q) ||
        spot.tags.some((t) => t.toLowerCase().includes(q)) ||
        spot.category.toLowerCase().includes(q);

      const matchCategory =
        activeCategory === "All" || spot.category === activeCategory;

      const matchBudget =
        activeBudget === "All" || spot.budget === activeBudget;

      return matchSearch && matchCategory && matchBudget;
    });
  }, [searchQuery, activeCategory, activeBudget]);

  return (
    <div>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Explore India 🇮🇳</h1>
        <p style={styles.subheading}>
          Browse all destinations and find your perfect trip
        </p>
        <div style={styles.searchBar}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search by name, state, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.input}
          />
          {searchQuery && (
            <span
              style={styles.clear}
              onClick={() => setSearchQuery("")}
            >
              ✕
            </span>
          )}
        </div>
      </div>

      <Filters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeBudget={activeBudget}
        setActiveBudget={setActiveBudget}
      />

      <SpotGrid spots={filteredSpots} />
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#1b5e20",
    color: "#fff",
    padding: "48px 40px 40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "800",
    margin: "0 0 10px",
  },
  subheading: {
    fontSize: "16px",
    opacity: 0.85,
    margin: "0 0 28px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "40px",
    padding: "12px 20px",
    maxWidth: "480px",
    margin: "0 auto",
    gap: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "15px",
    width: "100%",
    color: "#333",
    backgroundColor: "transparent",
  },
  clear: {
    cursor: "pointer",
    color: "#999",
    fontSize: "14px",
  },
};
