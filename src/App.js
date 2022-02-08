import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/landing";
import Contact from "./Components/Contact/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>

  );
};

export default App;
