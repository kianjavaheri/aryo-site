import React, { useState } from "react";
import { Link } from "react-router-dom";
import './../styling/components/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function toggleNav(toggled:boolean) {
  const ul = (document.getElementById("list") as any)
  const nav = (document.getElementById("navbar") as any)
  const body = (document.body as any)

  if(toggled) {
    ul.style.display = "flex";
    nav.style.height = "100vh";
    body.style.maxHeight = "100vh";
    body.style.overflowY = "hidden";
  } else {
    ul.style.display = "none";
    nav.style.height = "fit-content";
    body.style.maxHeight = "fit-content";
    body.style.overflowY = "visible";
  }
}

function untoggle() {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(width <= 800) {
    const ul = (document.getElementById("list") as any)
    const nav = (document.getElementById("navbar") as any)
    const body = (document.body as any)

    ul.style.display = "none";
    nav.style.height = "fit-content";
    body.style.maxHeight = "fit-content";
    body.style.overflowY = "visible";
  }
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div id="navbar">

        <FontAwesomeIcon id="bars" icon={faBars} size="2x" onClick={() => {
          setOpen(open => !open)
          toggleNav(open)
        }}/>

        <h2>
          <Link to={"/"} className="name">Aryo Garakani</Link>
        </h2>
        
        <ul id="list">
          <li className="li-style"><Link className="link" to="/" onClick={untoggle}>Home</Link></li>

          <li className="li-style"><Link to="/programs" className="link" onClick={untoggle}>Programs</Link></li>

          <li id="activities-dropdown">
            <div id="dropdown-title">Activities</div>
            <div id="dropdown-content">
              <Link className="dropdown-item" to="/clubs">Clubs & Comp.</Link>
              <Link className="dropdown-item"to="/work">Work & Intern</Link>
              <Link className="dropdown-item"to="/projects">Passion Project</Link>
              <Link className="dropdown-item"to="/volunteering">Volunteer</Link>
            </div>
          </li>

          <li className="mobile-li"><Link to="/clubs" className="link" onClick={untoggle}>Clubs & Comp.</Link></li>

          <li className="mobile-li"><Link to="/work" className="link" onClick={untoggle}>Work & Intern</Link></li>

          <li className="mobile-li"><Link to="/projects" className="link" onClick={untoggle}>Passion Project</Link></li>

          <li className="mobile-li"><Link to="/volunteering" className="link" onClick={untoggle}>Volunteer</Link></li>

          <li className="li-style"><Link to="/hobbies" className="link" onClick={untoggle}>Hobbies</Link></li>
          
          <li className="li-style"><Link to="/resume" className="link" onClick={untoggle}>Resume</Link></li>
          
          <div id="sep"></div>
          
          <li className="li-style"><a href="https://www.instagram.com/aryo_garakani/" target="_blank" rel="noopener noreferrer" className="link"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className="li-style"><a href="https://www.linkedin.com/in/aryo-garakani-a60511233/" target="_blank" rel="noopener noreferrer" className="link"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
    </div>
  )
}

export default Navbar