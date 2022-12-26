import React from "react";
import { Link } from "react-router-dom";
import './../styling/components/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Navbar() {

  return (
    <div id="navbar"> 
        <h2>
          <Link to={"/"} className="name">Aryo Garakani</Link>
        </h2>
        
        <ul>
          <li className="link"><Link className="linkt" to="/">Home</Link></li>
          <li><Link to="/programs" className="link">Programs</Link></li>

          <li id="activities-dropdown" className="link">
              {/* <div className="link">Activities</div> */}
              activities
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/clubs">Clubs & Comp.</Link>
                <Link className="dropdown-item"to="/work">Work & Intern</Link>
                <Link className="dropdown-item"to="/projects">Passion Project</Link>
                <Link className="dropdown-item"to="/volunteering">Volunteer</Link>
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