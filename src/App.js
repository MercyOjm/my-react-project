import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Filler from './routes/Filler';
import Contact from './routes/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Filler/>} />
         <Route path="shop" element={<Shop />}>
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
