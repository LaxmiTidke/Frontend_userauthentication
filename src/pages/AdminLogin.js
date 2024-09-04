import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function AdminLogin() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(email === 'admin@email.com' && password === 'Admin@123'){
        localStorage.setItem('token', JSON.stringify("Admin Logged in successfully"));
        navigate('/admin/dashboard');
        setIsLoggedIn(true);
      }else{
        alert("Incorrect Email or Password");
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container w-75">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Login</button>

      </form>
    </div>
  );
}

export default AdminLogin;
