// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import "./App.css"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set isLoggedIn state to true upon successful login
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login handleLoginSuccess={handleLoginSuccess} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login handleLoginSuccess={handleLoginSuccess} />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
