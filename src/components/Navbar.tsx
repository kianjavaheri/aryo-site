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

          <li id="activities-dropdown">
              <button className="link">Activities</button>
              <div className="dropdown-content">
                <div className="dropdown-item"><Link className="dd-link" to="/clubs">Clubs & Competitions</Link></div>
                <div className="dropdown-item"><Link className="dd-link"to="/work">Internships & Work Experience</Link></div>
                <div className="dropdown-item"><Link className="dd-link"to="/projects">Passion Project</Link></div>
                <div className="dropdown-item"><Link className="dd-link"to="/volunteering">Volunteering & Leadership</Link></div>
              </div>
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

export default Navbar