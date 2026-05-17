import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        🌍 VoyageVault
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/explore" style={styles.link}>Explore</Link>
        <Link to="/about" style={styles.link}>About</Link>
        {user ? (
          <div style={styles.userArea}>
            <span style={styles.userName}>👋 {user.name}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#2e7d32",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontSize: "15px",
    fontWeight: "500",
  },
  loginBtn: {
    textDecoration: "none",
    backgroundColor: "#2e7d32",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
  },
  userArea: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  userName: {
    fontSize: "14px",
    color: "#444",
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: "transparent",
    border: "1.5px solid #e53935",
    color: "#e53935",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
