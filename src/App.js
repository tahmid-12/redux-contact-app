import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<h1>Welcome to Contact Book</h1>} />
        <Route path="/add" element={<h1>Add Contact</h1>} />
        <Route path="/edit/:id" element={<h1>Edit Contact</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
