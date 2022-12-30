import React from 'react';
import './../styling/components/HomeAbout.css';
import aryo from './../util/imgs/aryo.jpg'

function HomeAbout() {
  return (
    <div id="home-about">
        <div id="writing-section">
            <Info className="info" title="About Me" text="The complex fields of economics and finance have always fascinated me with their ability to explain and predict human behavior and decision making. The intricate interplay of supply and demand, risk and reward, and the impact of market forces on individuals and societies is endlessly intriguing. As I delve deeper into these complex fields, I am continually inspired by the potential they have to shape and improve our world."/>

            <div id="mobile-image-section"><img src={aryo} alt="aryo-portrait"/></div>

            <Info className="info" title="University Programs" text="Outside of the education I have received at Amador Valley High School, I have taken advantage of unique programs and resources to delve deeper into the fields of economics and finance at university level institutions. I have participated in research projects on game theory and two-part tariffs, studied behavioral finance and FinTech, and used advanced analytical tools whilst working with experts in the fields to explore the intricacies of these topics. These various opportunities have allowed me to expand my knowledge and develop a greater understanding of the complex field of economics."/>

            <Info className="info" title="Activities" text="In this specific portion of my website, I am excited to highlight the various clubs, internships, passion projects, and community service opportunities I have been able to be a part of and lead. Each one of these experiences has allowed me to utilize and enhance my economic skills in meaningful ways, driving communities forward and making a positive impact. Whether it be through analyzing data, developing and implementing solutions, or collaborating with diverse groups, I have been able to apply my knowledge and skills to make a difference."/>

            <Info className="info" title="Hobbies" text="In the end portion of my website, I will include information on my hobbies and activities in my free time as a senior in high school. These interests provide a sense of balance and enjoyment in my life. I would also like to take this opportunity to thank the reader for taking the time to view my site. I hope that you have found the information and content to be informative and interesting."/>
        </div>
        <div id="image-section"><img src={aryo} alt="aryo-portrait"/></div>
    </div>
  )
}

function Info(props:any) {
    return (
        <div className="info">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default HomeAbout