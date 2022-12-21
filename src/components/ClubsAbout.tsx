import React from 'react'
import './../styling/components/ClubsAbout.css';

function ClubsAbout() {
  return (
    <div id="clubs-about">
        <div id="writing-section">
            <Info title="DECA" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>

            <Info title="Investment Club" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>

            <Info title="Middle Eastern Club" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
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
    )
}

export default ClubsAbout