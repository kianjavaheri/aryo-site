import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ActivityOne from "./pages/ActivityOne";
import ActivityTwo from "./pages/ActivityTwo";
import Hobbies from "./pages/Hobbies";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity1" element={<ActivityOne />} />
        <Route path="/activity2" element={<ActivityTwo />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
