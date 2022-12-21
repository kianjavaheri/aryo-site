import React, { useState } from "react";
import { Link } from "react-router-dom";
import './../styling/components/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div id="navbar"> 
        <h2>
          <Link to={"/"} className="name">
            Aryo Garakani
          </Link>
        </h2>
        
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/programs" className="link">University Programs</Link></li>
          {/* <li><Link to="/activities" className="link">Activities</Link></li> */}

          <li>
            <a className="link" onClick={() => setOpen(!open)}>Activities</a>
            {open && <DropdownMenu/>}
          </li>
          <li><Link to="/hobbies" className="link">Hobbies</Link></li>
          <li><Link to="/resume" className="link">Resume</Link></li>
          <div id="sep"></div>
          <li><a href="https://www.instagram.com/aryo_garakani/" target="_blank" rel="noopener noreferrer" className="link"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.linkedin.com/in/aryo-garakani-a60511233/" target="_blank" rel="noopener noreferrer" className="link"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
    </div>
  )
}

function DropdownMenu() {
  return (
    <div className="dropdown">
      <li><Link to="/clubs" className="link">Clubs & Competitions</Link></li>
      <li><Link to="/work" className="link">Internships & Work Experience</Link></li>
      <li><Link to="/projects" className="link">Passion Project</Link></li>
      <li><Link to="/volunteering" className="link">Volunteering & Leadership</Link></li>
    </div>
  )
}

export default Navbar