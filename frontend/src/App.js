import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import AgencyListing from './components/AgencyListing';
import Sidebar from './components/Sidebar';
import AboutPage from './components/AboutPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/agencies" element={<AgencyListing />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
