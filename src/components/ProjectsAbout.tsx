import React from 'react'
import './../styling/components/ProjectsAbout.css';


function ProjectsAbout() {
  return (
    <div id="projects-about">
      <div id="writing-section">
        <Info title="FinGrad Inc." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim sed pariatur recusandae in dolorem voluptate laudantium est inventore aperiam, quaerat eligendi, modi accusantium quod commodi nisi repudiandae ipsam libero aliquid deserunt! Iure eligendi aut, porro iusto quia, voluptas ab commodi mollitia, voluptatem possimus dicta eius ut facilis. Non adipisci dignissimos ut totam recusandae. Nesciunt quam esse laudantium error animi temporibus harum aliquam perspiciatis debitis mollitia, inventore ut vero illum, reprehenderit illo tempora beatae reiciendis tenetur labore accusamus doloribus perferendis!"/>
      </div>
    </div>
  )
}

function Info(props:any) {
  return (
    <div className="info">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default ProjectsAbout