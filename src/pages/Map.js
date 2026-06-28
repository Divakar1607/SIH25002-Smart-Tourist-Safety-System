import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const touristSpots = [
  { id: 1, name: 'Taj Mahal', lat: 27.1751, lng: 78.0421, zone: 'safe' },
  { id: 2, name: 'Gateway of India', lat: 18.9220, lng: 72.8347, zone: 'safe' },
  { id: 3, name: 'Qutub Minar', lat: 28.5244, lng: 77.1855, zone: 'safe' },
  { id: 4, name: 'Jaipur City Palace', lat: 26.9258, lng: 75.8237, zone: 'caution' },
  { id: 5, name: 'Mysore Palace', lat: 12.3052, lng: 76.6551, zone: 'safe' },
];

function MapPage() {
  return (
    <div style={{background:'#0a1628',minHeight:'100vh',color:'white'}}>
      <nav style={{background:'#112240',padding:'15px 40px',borderBottom:'1px solid #1e3a5f'}}>
        <div style={{color:'#00b4d8',fontWeight:700,fontSize:20}}>🛡️ SafeTrip India</div>
        <div style={{display:'flex',gap:24,marginTop:8}}>
          <Link to="/" style={{color:'#aabbcc',textDecoration:'none'}}>Home</Link>
          <Link to="/sos" style={{color:'#aabbcc',textDecoration:'none'}}>SOS Alert</Link>
          <Link to="/map" style={{color:'#00b4d8',textDecoration:'none'}}>Map</Link>
          <Link to="/register" style={{color:'#aabbcc',textDecoration:'none'}}>Register</Link>
          <Link to="/dashboard" style={{color:'#aabbcc',textDecoration:'none'}}>Dashboard</Link>
        </div>
      </nav>

      <div style={{padding:'30px 40px'}}>
        <h1 style={{fontSize:32,marginBottom:8}}>🗺️ Geo-Fencing Map</h1>
        <p style={{color:'#aabbcc',marginBottom:24}}>Real-time tourist safety zones across India</p>

        {/* Legend */}
        <div style={{display:'flex',gap:16,marginBottom:20}}>
          {[{color:'#27ae60',label:'Safe Zone'},{color:'#e74c3c',label:'Caution Zone'}].map((z,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:14,height:14,borderRadius:'50%',background:z.color}}></div>
              <span style={{color:'#aabbcc',fontSize:14}}>{z.label}</span>
            </div>
          ))}
        </div>

        {/* Leaflet Map */}
        <div style={{borderRadius:12,overflow:'hidden',border:'1px solid #1e3a5f'}}>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{height:'500px',width:'100%'}}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {touristSpots.map(spot => (
              <React.Fragment key={spot.id}>
                <Marker position={[spot.lat, spot.lng]}>
                  <Popup>
                    <b>{spot.name}</b><br/>
                    Zone: {spot.zone === 'safe' ? '✅ Safe' : '⚠️ Caution'}
                  </Popup>
                </Marker>
                <Circle
                  center={[spot.lat, spot.lng]}
                  radius={5000}
                  color={spot.zone === 'safe' ? '#27ae60' : '#e74c3c'}
                  fillOpacity={0.2}
                />
              </React.Fragment>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default MapPage;