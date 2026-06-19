import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function SOS() {
  const [alertSent, setAlertSent] = useState(false);
  const [status, setStatus] = useState('');
  const handleSOS = () => {
    setStatus('Sending alert...');
    setTimeout(() => {
      setStatus('Locating nearest authority...');
      setTimeout(() => { setStatus('Alert sent! Authority notified in 28 seconds!'); setAlertSent(true); }, 2000);
    }, 1500);
  };
  return (
    <div style={{background:'#0a1628',minHeight:'100vh',color:'white',fontFamily:'Segoe UI'}}>
      <nav style={{background:'#112240',padding:'15px 40px',borderBottom:'2px solid #00b4d8',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#00b4d8',fontWeight:700,fontSize:20}}>SafeTrip India</div>
        <div style={{display:'flex',gap:24}}>
          <Link to="/" style={{color:'#aabbcc',textDecoration:'none'}}>Home</Link>
          <Link to="/sos" style={{color:'#00b4d8',textDecoration:'none',fontWeight:700}}>SOS Alert</Link>
          <Link to="/map" style={{color:'#aabbcc',textDecoration:'none'}}>Map</Link>
          <Link to="/register" style={{color:'#aabbcc',textDecoration:'none'}}>Register</Link>
          <Link to="/dashboard" style={{color:'#aabbcc',textDecoration:'none'}}>Dashboard</Link>
        </div>
      </nav>
      <div style={{maxWidth:700,margin:'0 auto',padding:'60px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:36,marginBottom:10}}>SOS Emergency Alert</h1>
        <p style={{color:'#aabbcc',marginBottom:40}}>Press the button below to alert nearest authorities</p>
        {!alertSent ? (
          <button onClick={handleSOS} style={{width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle, #ff4444, #cc0000)',border:'6px solid #ff6666',color:'white',fontSize:28,fontWeight:900,cursor:'pointer',boxShadow:'0 0 40px rgba(255,0,0,0.6)',marginBottom:30}}>SOS</button>
        ) : (
          <div style={{width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle, #27ae60, #1e8449)',border:'6px solid #2ed573',color:'white',fontSize:20,fontWeight:900,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 30px',boxShadow:'0 0 40px rgba(0,255,100,0.5)'}}>Alert Sent!</div>
        )}
        {status && <div style={{background:'#112240',border:'1px solid #00b4d8',borderRadius:12,padding:'16px 24px',marginBottom:30,fontSize:16}}>{status}</div>}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:30}}>
          <div style={{background:'#112240',border:'1px solid #1e4060',borderRadius:12,padding:20}}>
            <h3 style={{color:'#00b4d8',marginBottom:6}}>Your Location</h3>
            <p style={{color:'#aabbcc',fontSize:13}}>Lat: 10.9254 N | Lng: 78.0422 E | Karur, Tamil Nadu</p>
          </div>
          <div style={{background:'#112240',border:'1px solid #1e4060',borderRadius:12,padding:20}}>
            <h3 style={{color:'#00b4d8',marginBottom:6}}>Nearest Authority</h3>
            <p style={{color:'#aabbcc',fontSize:13}}>Karur Police Station | Distance: 1.2 km | ETA: 4 mins</p>
          </div>
          <div style={{background:'#112240',border:'1px solid #1e4060',borderRadius:12,padding:20}}>
            <h3 style={{color:'#00b4d8',marginBottom:6}}>Response Time</h3>
            <p style={{color:'#aabbcc',fontSize:13}}>Target: less than 30 seconds | 24/7 Available</p>
          </div>
          <div style={{background:'#112240',border:'1px solid #1e4060',borderRadius:12,padding:20}}>
            <h3 style={{color:'#00b4d8',marginBottom:6}}>Emergency Numbers</h3>
            <p style={{color:'#aabbcc',fontSize:13}}>Police: 100 | Ambulance: 108 | Fire: 101</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SOS;