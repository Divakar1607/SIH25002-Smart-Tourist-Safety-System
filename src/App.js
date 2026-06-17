import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🛡️ SafeTrip India</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sos">SOS Alert</Link>
          <Link to="/map">Map</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">🇮🇳 SIH25002 — Smart Safety System</div>
        <h1 className="hero-title">Smart Tourist Safety<br/>Monitoring System</h1>
        <p className="hero-sub">AI-powered real-time safety monitoring, geo-fencing alerts,<br/>and blockchain digital identity for tourists across India</p>
        <div className="hero-btns">
          <Link to="/register" className="btn-primary">🪪 Register as Tourist</Link>
          <Link to="/sos" className="btn-danger">🚨 SOS Emergency</Link>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Incident Detection</h3>
          <p>ML model detects anomalies and flags suspicious activity in real time</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📍</div>
          <h3>Geo-Fencing Alerts</h3>
          <p>Dynamic virtual boundaries trigger auto-alerts in danger zones</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🪪</div>
          <h3>Blockchain Digital ID</h3>
          <p>Tamper-proof tourist identity for fraud-free verification</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚨</div>
          <h3>SOS Alert System</h3>
          <p>One-tap emergency alert notifies nearest authorities in 30 seconds</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Authority Dashboard</h3>
          <p>Live heatmaps and incident tracking for police and responders</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Multilingual Support</h3>
          <p>Tamil, Hindi and English support for all tourists and authorities</p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <h2>100M+</h2>
          <p>Tourists in India yearly</p>
        </div>
        <div className="stat">
          <h2>&lt; 30s</h2>
          <p>SOS response time</p>
        </div>
        <div className="stat">
          <h2>6</h2>
          <p>Core AI modules</p>
        </div>
        <div className="stat">
          <h2>24/7</h2>
          <p>Real-time monitoring</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>SIH25002 — Smart Tourist Safety Monitoring System</p>
        <p>VSB Engineering College, Karur | B.Tech AI & Data Science | Divakar</p>
      </footer>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;