import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<h1>Add Contact</h1>} />
        <Route path="/edit/:id" element={<h1>Edit Contact</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
