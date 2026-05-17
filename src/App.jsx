import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import SpotGrid from "./components/SpotGrid";
import Footer from "./components/Footer";
import { spots } from "./data/spots";
import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");

  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        q === "" ||
        spot.name.toLowerCase().includes(q) ||
        spot.country.toLowerCase().includes(q) ||
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
      <Navbar />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeBudget={activeBudget}
        setActiveBudget={setActiveBudget}
      />
      <SpotGrid spots={filteredSpots} />
      <Footer />
    </div>
  );
}
