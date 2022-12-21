import React from 'react'
import './../styling/components/ProgramsAbout.css';

function ProgramsAbout() {
  return (
    <div id="programs-about">
      <div id="writing-section">
        <Info title="UChicago Pathways in Economics Summer Session" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
        
        <Info title="Duke Extension Certificates: Behavioral Finance / Decentralized Finance (DeFi): The Future of Finance Specialization" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
        
        <Info title="UPenn Extension Certificate: Fintech: Foundations & Applications of Financial Technology Specialization" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
        
        <Info title="Las Positas Community College: Principles of Microeconomics" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
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
 
export default ProgramsAbout