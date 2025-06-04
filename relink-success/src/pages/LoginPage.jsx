// src/pages/LoginPage.jsx
import React from 'react';

function LoginPage() {
  // We'll add state and Firebase login logic here later
  return (
    <div>
      <h2>Login / Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button type="button" onClick={handleLogin} disabled={loading} style={{ marginRight: '10px' }}>
            {loading ? 'Logging In...' : 'Log In'}
          </button>
          <button type="button" onClick={handleSignup} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;