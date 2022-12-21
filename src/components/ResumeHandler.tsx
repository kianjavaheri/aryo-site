import React from 'react'
import './../styling/components/ResumeHandler.css';

function ResumeHandler() {
  return (
    <div id="resume-wrapper">
        <a href='./../util/docs/resume.txt' download>Download Resume</a>
    </div>
  )
}

export default ResumeHandler