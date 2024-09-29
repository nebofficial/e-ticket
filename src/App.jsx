import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setbook from './components/Setbook';
import Homepage from './home/Homepage'; // Ensure the path is correct based on your folder structure
import About from './components/About';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Use Homepage instead of Home */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setbook" element={<Setbook />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
