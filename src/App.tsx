import React from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  //TODO implement proper data fetching, uses dummy data for now
  const data = ["Company1", "Company2", "Company3"]

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   </BrowserRouter>
  );
}


export default App;
