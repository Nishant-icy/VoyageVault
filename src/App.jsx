import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Login page - no navbar/footer */}
          <Route path="/login" element={<LoginPage />} />

          {/* All other pages - with navbar and footer */}
          <Route
            path="/*"
            element={
              <div>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
