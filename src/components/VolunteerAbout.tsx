import React from 'react'
import './../styling/components/VolunteerAbout.css';


function VolunteerAbout() {
  return (
    <div id="volunteer-about">
        <div id="writing-section">
            <Info title="The President's Volunteer Service Award" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis cum accusantium fugiat? Officiis eum nemo saepe ex aliquam. Aliquam et voluptatibus doloremque dolorum ullam tempora optio consequatur, sunt, inventore, id ipsum quam nam. Incidunt rem nemo vel quaerat sed!"/>

            <Info title="American Cancer Society" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis cum accusantium fugiat? Officiis eum nemo saepe ex aliquam. Aliquam et voluptatibus doloremque dolorum ullam tempora optio consequatur, sunt, inventore, id ipsum quam nam. Incidunt rem nemo vel quaerat sed!"/>

            <Info title="Iranian American Youth of Tri-Valley" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis cum accusantium fugiat? Officiis eum nemo saepe ex aliquam. Aliquam et voluptatibus doloremque dolorum ullam tempora optio consequatur, sunt, inventore, id ipsum quam nam. Incidunt rem nemo vel quaerat sed!"/>

            <Info title="American Red Cross" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis cum accusantium fugiat? Officiis eum nemo saepe ex aliquam. Aliquam et voluptatibus doloremque dolorum ullam tempora optio consequatur, sunt, inventore, id ipsum quam nam. Incidunt rem nemo vel quaerat sed!"/>
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

export default VolunteerAbout