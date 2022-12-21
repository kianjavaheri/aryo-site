import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Clubs from "./pages/Clubs";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Volunteer from "./pages/Volunteer";
import Hobbies from "./pages/Hobbies";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* tab one - home */}
        <Route path="/" element={<Home />} />
        {/* tab two - univeristy programs */}
        <Route path="/programs" element={<Programs />} />
        {/* tab three - activites */}
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/volunteering" element={<Volunteer />} />
        {/* tab four - hobbies */}
        <Route path="/hobbies" element={<Hobbies />} />
        {/* tab five - resume */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
