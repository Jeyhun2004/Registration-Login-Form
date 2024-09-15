import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
