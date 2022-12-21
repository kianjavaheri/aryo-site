import React from 'react'
import './../styling/components/HobbiesAbout.css';

function HobbiesAbout() {
  return (
    <div id="hobbies-about">
        <div id="writing-section">
            <Info title="Lacrosse" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>

            <Info title="Gardening" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>

            <Info title="Sneaker Reselling" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>

            <Info title="Fantasy Football" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas, maxime voluptates dolore molestiae mollitia ratione distinctio, sit possimus facere accusamus! Delectus, rerum voluptates, minus ea accusantium, autem iste veniam libero aut voluptatibus enim. Voluptas molestiae atque totam consequuntur inventore!"/>
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

export default HobbiesAbout