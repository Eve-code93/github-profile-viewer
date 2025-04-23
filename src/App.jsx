import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'; 
import ProfileOverview from './ProfileOverview';
import About from './About';


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileOverview />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
