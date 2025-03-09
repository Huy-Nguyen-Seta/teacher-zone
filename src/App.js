import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PlanBuilders from './pages/PlanBuilder';

import AppBar from './components/AppBar';

import './index.css';
import Sidebar from './components/SideBar';
function App() {
  const [user, setUser] = useState({ name:'Admin', org: 'Seta School', imageSrc:'/images/seta.png' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
  }, []);

  const handleLogin = (loggedInUser) => {
    // setUser(loggedInUser);
    // localStorage.setItem('user', JSON.stringify(loggedInUser)); 
  };

  const handleLogout = () => {
    // setUser(null);
    // localStorage.removeItem('user');
  };

  return (
    <Router>
        <AppBar user={user} toggleSidebar={toggleSidebar}/>

        <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-y-auto mt-24  transition-width duration-300 ease-in-out z-5">

        <Routes>
          <Route
            path="/home"
            element={<Home user={user} />}
          />
          <Route
            path="/plan-builders"
            element={<PlanBuilders />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        </div>
        </div>
    </Router>
  );
}

export default App;