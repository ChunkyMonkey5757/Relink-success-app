// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { useAuth } from './contexts/AuthContext.js'; // <-- IMPORT useAuth

// Updated Navbar component
function Navbar() {
  const { currentUser, logout } = useAuth(); // <-- GET currentUser and logout
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to log out', error);
      // Optionally show an error message to the user
    }
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <div>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        {!currentUser && <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>}
        {/* Add other general links here */}
      </div>
      <div>
        {currentUser ? (
          <>
            <span style={{ marginRight: '10px' }}>Logged in as: {currentUser.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <span style={{ marginRight: '10px' }}>You are not logged in.</span>
        )}
      </div>
    </nav>
  );
}

function App() {
  // No changes needed in the App function itself for this step,
  // as AuthProvider is already wrapping it in main.jsx
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
