import React, { useState } from 'react';
import { verifyPassword } from './auth';
import AdminDashboard from './AdminDashboard';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (verifyPassword(password)) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Wrong password! Try: sorrel2026');
    }
  };

  if (isLoggedIn) {
    return <AdminDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h1>🔐 Admin Login</h1>
          <p>Sorrel Properties Management</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
          
          <div className="password-hint">
            <p>💡 Default password: <strong>sorrel2026</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;