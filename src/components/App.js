import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './Login/Login.css'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import Preferences from './Preferences/Preferences'

function App() {
  const [token, setToken] = useState();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
