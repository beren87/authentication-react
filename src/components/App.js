import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './Login/Login.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Preferences from './Preferences/Preferences';
import userToken from './useToken';

function App() {

  const { token, setToken } = userToken()

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
