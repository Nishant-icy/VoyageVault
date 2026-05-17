import React, { useState, useMemo } from "react";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import SpotGrid from "../components/SpotGrid";
import { spots } from "../data/spots";

export default function HomePage() {
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
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
