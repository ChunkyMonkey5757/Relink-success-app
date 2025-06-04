// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'; // We'll create this next
import LoginPage from './pages/LoginPage.jsx'; // And this one

// You can create a simple Navbar component later or add links here directly
function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      {/* Add other links as your app grows: Dashboard, Job Search, etc. */}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Display a simple navigation bar */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Define other routes here as you build pages:
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/jobs" element={<JobSearchPage />} />
          <Route path="/resume-builder" element={<ResumeBuilderPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/applications" element={<ApplicationTrackerPage />} />
          <Route path="/employer-submit-job" element={<EmployerJobFormPage />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;