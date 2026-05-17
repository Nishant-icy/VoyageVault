# 🌍 VoyageVault

A tourist spot recommendation website built with React.

## Features

- Browse 12 popular tourist destinations worldwide
- Search by name, country, or category
- Filter by category (Beach, City, Mountains, Adventure)
- Filter by budget (Low, Medium, High)
- Add destinations to wishlist (heart button)
- Responsive card layout

## Tech Stack

- React (with Vite)
- Plain CSS-in-JS (no extra libraries needed)
- Unsplash images

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    Navbar.jsx       - Top navigation bar
    Hero.jsx         - Banner with search bar
    Filters.jsx      - Category and budget filters
    SpotCard.jsx     - Individual destination card
    SpotGrid.jsx     - Grid of all cards
    Footer.jsx       - Footer section
  data/
    spots.js         - All destination data
  App.jsx            - Main app component
```

## Concepts Used

- useState - for search, filters, and wishlist state
- useMemo - for efficient filtering without re-renders
- Props passing between components
- Conditional rendering
- Array methods: filter, map, some
