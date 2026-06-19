import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const data = [
  { id:1, type:'ACCIDENT', tourist:'John Smith', location:'Karur City Center', status:'RESOLVED', time:'09:15 AM', color:'#27ae60' },
  { id:2, type:'CRIME', tourist:'Maria Garcia', location:'Forest Area', status:'IN-PROGRESS', time:'10:32 AM', color:'#f39c12' },
  { id:3, type:'MEDICAL', tourist:'Raj Kumar', location:'Highway Zone', status:'OPEN', time:'11:05 AM', color:'#e74c3c' },
  { id:4, type:'SOS ALERT', tourist:'Emma Wilson', location:'Karur Temple', status:'RESOLVED', time:'11:48 AM', color:'#27ae60' },
  { id:5, type:'ACCIDENT', tourist:'Li Wei', location:'Market Area', status:'IN-PROGRESS', time:'12:10 PM', color:'#f39c12' },
];
function Dashboard() {
  const [filter, setFilter] = useState('ALL');
  const filtered = filter === 'ALL' ? data : data.filter(i => i.status === filter);
  return (
    <div style={{background:'#0a1628',minHeight:'100vh',color:'white',fontFamily:'Segoe UI'}}>
      <nav style={{background:'#112240',padding:'15px 40px',borderBottom:'2px solid #00b4d8',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#00b4d8',fontWeight:700,fontSize:20}}>SafeTrip India</div>
        <div style={{display:'flex',gap:24}}>
          <Link to="/" style={{color:'#aabbcc',textDecoration:'none'}}>Home</Link>
          <Link to="/sos" style={{color:'#aabbcc',textDecoration:'none'}}>SOS Alert</Link>
          <Link to="/map" style={{color:'#aabbcc',textDecoration:'none'}}>Map</Link>
          <Link to="/register" style={{color:'#aabbcc',textDecoration:'none'}}>Register</Link>
          <Link to="/dashboard" style={{color:'#00b4d8',textDecoration:'none',fontWeight:700}}>Dashboard</Link>
        </div>
      </nav>
      <div style={{padding:'30px 40px'}}>
        <h1 style={{fontSize:32,marginBottom:8}}>Authority Dashboard</h1>
        <p style={{color:'#aabbcc',marginBottom:30}}>Live incident monitoring - Karur, Tamil Nadu</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:30}}>
          {[{label:'Total',value:5,color:'#00b4d8'},{label:'Open',value:1,color:'#e74c3c'},{label:'In Progress',value:2,color:'#f39c12'},{label:'Resolved',value:2,color:'#27ae60'}].map((s,i)=>(
            <div key={i} style={{background:'#112240',border:`1px solid ${s.color}`,borderRadius:12,padding:20,textAlign:'center'}}>
              <div style={{fontSize:36,fontWeight:800,color:s.color}}>{s.value}</div>
              <div style={{color:'#aabbcc',fontSize:13}}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:12,marginBottom:16}}>
          {['ALL','OPEN','IN-PROGRESS','RESOLVED'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{padding:'8px 20px',borderRadius:8,border:'1px solid #00b4d8',background:filter===f?'#00b4d8':'transparent',color:filter===f?'#0a1628':'#00b4d8',fontWeight:600,cursor:'pointer',fontSize:13}}>{f}</button>
          ))}
        </div>
        <div style={{background:'#112240',borderRadius:12,overflow:'hidden',border:'1px solid #1e4060'}}>
          <table style={{width:'100%',borderCollapse:'collapse'}}>
            <thead>
              <tr style={{background:'#0a1628'}}>
                {['#','Type','Tourist','Location','Time','Status'].map(h=>(
                  <th key={h} style={{padding:'14px 16px',textAlign:'left',color:'#00b4d8',fontSize:13}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((inc,i)=>(
                <tr key={inc.id} style={{borderTop:'1px solid #1e4060',background:i%2===0?'#112240':'#0d1e35'}}>
                  <td style={{padding:'12px 16px',color:'#aabbcc',fontSize:13}}>{inc.id}</td>
                  <td style={{padding:'12px 16px',color:'white',fontSize:13,fontWeight:600}}>{inc.type}</td>
                  <td style={{padding:'12px 16px',color:'#aabbcc',fontSize:13}}>{inc.tourist}</td>
                  <td style={{padding:'12px 16px',color:'#aabbcc',fontSize:13}}>{inc.location}</td>
                  <td style={{padding:'12px 16px',color:'#aabbcc',fontSize:13}}>{inc.time}</td>
                  <td style={{padding:'12px 16px'}}>
                    <span style={{background:inc.color+'22',color:inc.color,padding:'4px 12px',borderRadius:20,fontSize:12,fontWeight:700,border:`1px solid ${inc.color}`}}>{inc.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;