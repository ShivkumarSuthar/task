// App.js
import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import "./App.css"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set isLoggedIn state to true upon successful login
  };

  return (
   
      <div>
        <Routes>
          <Route path="/Login" element={isLoggedIn ? <Dashboard /> : <Login handleLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login handleLoginSuccess={handleLoginSuccess} />} />
        </Routes>
       
      </div>
 
  );
};

export default App;
