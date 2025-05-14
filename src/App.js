// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignalementForm from './composants/SignalementForm';
import SignalementMap from './composants/SignalementMap';
import SignalementList from './composants/SignalementList';
import Register from './composants/Register';
import Login from './composants/Login';
import Home from './composants/Home';



function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signalement" element={<SignalementForm />} />
        <Route path="/map" element={<SignalementMap />} />
        <Route path="/liste" element={<SignalementList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
