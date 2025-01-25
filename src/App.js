import React from 'react';
import './App.css';
import Home from './Routes/Home';
import Demo from './Routes/Demo';
import Document from './Routes/Document';
import About from './Routes/About';

import{ Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/documentation" element={<Document />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
