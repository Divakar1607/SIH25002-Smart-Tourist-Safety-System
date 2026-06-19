import React from 'react';
import { Link } from 'react-router-dom';
function MapPage() {
  return (
    <div style={{background:'#0a1628',minHeight:'100vh',color:'white',fontFamily:'Segoe UI'}}>
      <nav style={{background:'#112240',padding:'15px 40px',borderBottom:'2px solid #00b4d8',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#00b4d8',fontWeight:700,fontSize:20}}>SafeTrip India</div>
        <div style={{display:'flex',gap:24}}>
          <Link to="/" style={{color:'#aabbcc',textDecoration:'none'}}>Home</Link>
          <Link to="/sos" style={{color:'#aabbcc',textDecoration:'none'}}>SOS Alert</Link>
          <Link to="/map" style={{color:'#00b4d8',textDecoration:'none',fontWeight:700}}>Map</Link>
          <Link to="/register" style={{color:'#aabbcc',textDecoration:'none'}}>Register</Link>
          <Link to="/dashboard" style={{color:'#aabbcc',textDecoration:'none'}}>Dashboard</Link>
        </div>
      </nav>
      <div style={{padding:'30px 40px'}}>
        <h1 style={{fontSize:32,marginBottom:8}}>Geo-Fencing Map</h1>
        <p style={{color:'#aabbcc',marginBottom:24}}>Real-time tourist safety zones - Karur, Tamil Nadu</p>
        <div style={{display:'flex',gap:16,marginBottom:20}}>
          {[{color:'#27ae60',label:'Safe Zone'},{color:'#e74c3c',label:'Danger Zone'},{color:'#f39c12',label:'Restricted Zone'}].map((l,i)=>(
            <div key={i} style={{background:'#112240',border:`1px solid ${l.color}`,borderRadius:8,padding:'8px 16px',fontSize:13,color:'white'}}>{l.label}</div>
          ))}
        </div>
        <div style={{background:'#112240',borderRadius:12,border:'2px solid #00b4d8',height:400,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:48,marginBottom:16}}>Map View</div>
            <p style={{color:'#aabbcc'}}>Leaflet Map - Karur, Tamil Nadu</p>
            <p style={{color:'#aabbcc',fontSize:13}}>Lat: 10.9254 | Lng: 78.0422</p>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:24}}>
          {[{name:'Karur City Center',type:'SAFE',color:'#27ae60',radius:'500m'},{name:'Forest Area',type:'DANGER',color:'#e74c3c',radius:'800m'},{name:'Highway Zone',type:'RESTRICTED',color:'#f39c12',radius:'600m'}].map((z,i)=>(
            <div key={i} style={{background:'#112240',border:`1px solid ${z.color}`,borderRadius:12,padding:20}}>
              <h3 style={{color:z.color,marginBottom:8}}>{z.name}</h3>
              <p style={{color:'#aabbcc',fontSize:13}}>Type: {z.type} | Radius: {z.radius}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MapPage;