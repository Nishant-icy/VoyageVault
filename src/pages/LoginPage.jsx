import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:5000/api/auth";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isLogin ? `${API}/login` : `${API}/signup`;
    const body = isLogin
      ? { email: form.email, password: form.password }
      : { name: form.name, email: form.email, password: form.password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        login(data.user, data.token);
        navigate("/");
      }
    } catch (err) {
      setError("Cannot connect to server. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left panel */}
        <div style={styles.left}>
          <h1 style={styles.brand}>🌍 VoyageVault</h1>
          <p style={styles.brandDesc}>
            Explore the most beautiful places across India. From the Himalayas to tropical beaches — your adventure starts here.
          </p>
          <div style={styles.features}>
            <p>✅ Discover 12+ top destinations</p>
            <p>✅ Filter by budget & category</p>
            <p>✅ Save your favourite spots</p>
          </div>
        </div>

        {/* Right panel - form */}
        <div style={styles.right}>
          <h2 style={styles.title}>{isLogin ? "Welcome back!" : "Create account"}</h2>
          <p style={styles.subtitle}>
            {isLogin ? "Login to continue your journey" : "Join VoyageVault for free"}
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <div style={styles.field}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            )}

            <div style={styles.field}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            {error && <p style={styles.error}>⚠️ {error}</p>}

            <button type="submit" style={styles.btn} disabled={loading}>
              {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p style={styles.toggle}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              style={styles.toggleLink}
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f4f0",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
    maxWidth: "860px",
    width: "100%",
  },
  left: {
    flex: 1,
    minWidth: "260px",
    backgroundColor: "#1b5e20",
    color: "#fff",
    padding: "48px 36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  brand: {
    fontSize: "26px",
    fontWeight: "800",
    margin: "0 0 16px",
  },
  brandDesc: {
    fontSize: "15px",
    lineHeight: 1.7,
    opacity: 0.9,
    margin: "0 0 28px",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "14px",
    opacity: 0.85,
  },
  right: {
    flex: 1,
    minWidth: "280px",
    padding: "48px 36px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#222",
    margin: "0 0 6px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#888",
    margin: "0 0 28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#555",
  },
  input: {
    padding: "11px 14px",
    borderRadius: "8px",
    border: "1.5px solid #ddd",
    fontSize: "14px",
    outline: "none",
    transition: "border 0.2s",
    color: "#333",
  },
  error: {
    color: "#e53935",
    fontSize: "13px",
    margin: 0,
  },
  btn: {
    padding: "13px",
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "4px",
  },
  toggle: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },
  toggleLink: {
    color: "#2e7d32",
    fontWeight: "600",
    cursor: "pointer",
  },
};
