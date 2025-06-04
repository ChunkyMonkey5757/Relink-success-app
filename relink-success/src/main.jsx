// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Or your main CSS file
import { AuthProvider } from './contexts/AuthContext.js'; // <-- IMPORT IT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* <-- WRAP APP WITH AUTHPROVIDER */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);)