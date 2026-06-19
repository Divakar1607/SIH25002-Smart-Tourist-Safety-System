import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SOS from './pages/SOS';
import MapPage from './pages/Map';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function Home() {
  return (
    <div className="home">
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
      {/* INTRO VIDEO */}
<div style={{textAlign:'center', padding:'20px 0', background:'#000'}}>
  <video
    autoPlay
    muted
    loop
    style={{width:'100%', maxWidth:'800px', borderRadius:'12px'}}
  >
    <source src="/videos/intro.mp4" type="video/mp4" />
  </video>
</div>
      <div className="hero">
        <div className="hero-badge">🇮🇳 SIH25002 — Smart Safety System</div>
        <h1 className="hero-title">Smart Tourist Safety<br/>Monitoring System</h1>
        <p className="hero-sub">AI-powered real-time safety monitoring, geo-fencing alerts,<br/>and blockchain digital identity for tourists across India</p>
        <div className="hero-btns">
          <Link to="/register" className="btn-primary">🪪 Register as Tourist</Link>
          <Link to="/sos" className="btn-danger">🚨 SOS Emergency</Link>
        </div>
      </div>
      <div className="features">
        <div className="feature-card"><div className="feature-icon">🤖</div><h3>AI Incident Detection</h3><p>ML model detects anomalies in real time</p></div>
        <div className="feature-card"><div className="feature-icon">📍</div><h3>Geo-Fencing Alerts</h3><p>Auto alerts in danger zones</p></div>
        <div className="feature-card"><div className="feature-icon">🪪</div><h3>Blockchain Digital ID</h3><p>Tamper-proof tourist identity</p></div>
        <div className="feature-card"><div className="feature-icon">🚨</div><h3>SOS Alert System</h3><p>30 second emergency response</p></div>
        <div className="feature-card"><div className="feature-icon">📊</div><h3>Authority Dashboard</h3><p>Live heatmaps & incident tracking</p></div>
        <div className="feature-card"><div className="feature-icon">🌐</div><h3>Multilingual Support</h3><p>Tamil, Hindi & English</p></div>
      </div>
      <div className="stats">
        <div className="stat"><h2>100M+</h2><p>Tourists in India yearly</p></div>
        <div className="stat"><h2>&lt;30s</h2><p>SOS response time</p></div>
        <div className="stat"><h2>6</h2><p>Core AI modules</p></div>
        <div className="stat"><h2>24/7</h2><p>Real-time monitoring</p></div>
      </div>
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
        <Route path="/sos" element={<SOS />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;