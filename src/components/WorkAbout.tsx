import React from 'react'
import './../styling/components/WorkAbout.css';

function WorkAbout() {
  return (
    <div id="work-about">
        <div id="writing-section">
            <Info title="Tirgan - Unpaid Internship" time="August 2020 - Present" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae, numquam libero maiores voluptate tempora nesciunt eligendi tempore ea magnam?"/>

            <Info title="AAA Systems Enterprises - Unpaid Internship" time="October 2019 - Present" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae, numquam libero maiores voluptate tempora nesciunt eligendi tempore ea magnam?"/>

            <Info title="Full Bloom Learning Center - Unpaid Internship" time="December 2021 - Present" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae, numquam libero maiores voluptate tempora nesciunt eligendi tempore ea magnam?"/>

            <Info title="Walmart - Paid Work" time="July 2021 - September 2021" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae, numquam libero maiores voluptate tempora nesciunt eligendi tempore ea magnam?"/>
        </div>
    </div>
  )
}

function Info(props:any) {
    return (
      <div className="info">
        <h3>{props.title}</h3>
        <h4>{props.time}</h4>
        <p>{props.desc}</p>
      </div>
    );
}

export default WorkAbout