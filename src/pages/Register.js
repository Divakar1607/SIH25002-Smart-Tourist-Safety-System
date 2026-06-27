import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
  const [form, setForm] = useState({name:'',email:'',phone:'',nationality:'',idType:'',idNumber:''});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tourists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success) { setLoading(false); setSubmitted(true); }
      else { setLoading(false); alert('Error: ' + data.error); }
    } catch (err) {
      setLoading(false);
      alert('Backend connect aagala! Server running aa?');
    }
  };
  return (
    <div style={{background:'#0a1628',minHeight:'100vh',color:'white',fontFamily:'Segoe UI'}}>
      <nav style={{background:'#112240',padding:'15px 40px',borderBottom:'2px solid #00b4d8',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#00b4d8',fontWeight:700,fontSize:20}}>SafeTrip India</div>
        <div style={{display:'flex',gap:24}}>
          <Link to="/" style={{color:'#aabbcc',textDecoration:'none'}}>Home</Link>
          <Link to="/sos" style={{color:'#aabbcc',textDecoration:'none'}}>SOS Alert</Link>
          <Link to="/map" style={{color:'#aabbcc',textDecoration:'none'}}>Map</Link>
          <Link to="/register" style={{color:'#00b4d8',textDecoration:'none',fontWeight:700}}>Register</Link>
          <Link to="/dashboard" style={{color:'#aabbcc',textDecoration:'none'}}>Dashboard</Link>
        </div>
      </nav>
      <div style={{maxWidth:600,margin:'0 auto',padding:'50px 20px'}}>
        <h1 style={{fontSize:32,marginBottom:8,textAlign:'center'}}>Tourist Registration</h1>
        <p style={{color:'#aabbcc',textAlign:'center',marginBottom:36}}>Register to get your Blockchain Digital ID</p>
        {!submitted ? (
          <div style={{background:'#112240',borderRadius:16,padding:36,border:'1px solid #1e4060'}}>
            {[{label:'Full Name',name:'name',type:'text',placeholder:'Enter your full name'},{label:'Email',name:'email',type:'email',placeholder:'Enter your email'},{label:'Phone',name:'phone',type:'tel',placeholder:'Enter phone number'}].map((f,i)=>(
              <div key={i} style={{marginBottom:20}}>
                <label style={{display:'block',color:'#00b4d8',marginBottom:8,fontWeight:600}}>{f.label}</label>
                <input type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange}
                  style={{width:'100%',padding:'12px 16px',background:'#0a1628',border:'1px solid #334455',borderRadius:8,color:'white',fontSize:14,outline:'none'}}/>
              </div>
            ))}
            <div style={{marginBottom:20}}>
              <label style={{display:'block',color:'#00b4d8',marginBottom:8,fontWeight:600}}>Nationality</label>
              <select name="nationality" value={form.nationality} onChange={handleChange}
                style={{width:'100%',padding:'12px 16px',background:'#0a1628',border:'1px solid #334455',borderRadius:8,color:'white',fontSize:14}}>
                <option value="">Select nationality</option>
                <option>Indian</option><option>American</option><option>British</option><option>Other</option>
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{display:'block',color:'#00b4d8',marginBottom:8,fontWeight:600}}>ID Document Type</label>
              <select name="idType" value={form.idType} onChange={handleChange}
                style={{width:'100%',padding:'12px 16px',background:'#0a1628',border:'1px solid #334455',borderRadius:8,color:'white',fontSize:14}}>
                <option value="">Select ID type</option>
                <option>Passport</option><option>Aadhar Card</option><option>Visa</option><option>Driving License</option>
              </select>
            </div>
            <div style={{marginBottom:28}}>
              <label style={{display:'block',color:'#00b4d8',marginBottom:8,fontWeight:600}}>ID Number</label>
              <input type="text" name="idNumber" placeholder="Enter your ID number" value={form.idNumber} onChange={handleChange}
                style={{width:'100%',padding:'12px 16px',background:'#0a1628',border:'1px solid #334455',borderRadius:8,color:'white',fontSize:14,outline:'none'}}/>
            </div>
            <button onClick={handleSubmit} disabled={loading}
              style={{width:'100%',padding:'14px',background:loading?'#334455':'#00b4d8',color:loading?'#aabbcc':'#0a1628',border:'none',borderRadius:8,fontSize:16,fontWeight:700,cursor:'pointer'}}>
              {loading?'Creating Blockchain ID...':'Register and Get Digital ID'}
            </button>
          </div>
        ) : (
          <div style={{background:'#112240',borderRadius:16,padding:40,border:'1px solid #27ae60',textAlign:'center'}}>
            <div style={{fontSize:64,marginBottom:16}}>OK</div>
            <h2 style={{color:'#27ae60',marginBottom:12}}>Registration Successful!</h2>
            <p style={{color:'#aabbcc',marginBottom:24}}>Your Blockchain Digital ID has been created</p>
            <div style={{background:'#0a1628',borderRadius:8,padding:16,marginBottom:24,fontFamily:'monospace',fontSize:12,color:'#00b4d8',wordBreak:'break-all'}}>
              ID: 0x7f3a9b2c1d4e5f6a7b8c9d0e1f2a3b4c
            </div>
            <Link to="/" style={{background:'#00b4d8',color:'#0a1628',padding:'12px 28px',borderRadius:8,textDecoration:'none',fontWeight:700}}>Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Register;