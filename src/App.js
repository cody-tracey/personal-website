//Dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Bio from "./Components/Bio/bio";
import Contact from "./Components/Contact/contact";
import Landing from "./Components/Landing/landing";
import Portfolio from './Components/Portfolio/portfolio';

//Styling
import './App.scss';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>

  );
};

export default App;
