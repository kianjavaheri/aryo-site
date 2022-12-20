import React from 'react';
import './../styling/components/About.css';

function About() {
  return (
    <div id="about">
        <div id="writing-section">
            <Info className="info" title="About Me" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam perspiciatis consequuntur cupiditate, temporibus, illo rerum laborum, error enim dolorum ipsa officia ipsum aspernatur nostrum neque quae placeat porro consectetur molestiae ullam? Nihil maiores ea nisi reiciendis numquam! Nam minima labore obcaecati dolorum, id accusantium iure nihil sint distinctio autem nostrum ducimus debitis quod. Cum non repellat nihil minima quam voluptate blanditiis sequi impedit obcaecati? Aliquid ut dignissimos voluptatibus placeat recusandae nulla nisi mollitia totam eaque perferendis, itaque unde ipsum."/>

            <Info className="info" title="Activities" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam perspiciatis consequuntur cupiditate, temporibus, illo rerum laborum, error enim dolorum ipsa officia ipsum aspernatur nostrum neque quae placeat porro consectetur molestiae ullam? Nihil maiores ea nisi reiciendis numquam! Nam minima labore obcaecati dolorum, id accusantium iure nihil sint distinctio autem nostrum ducimus debitis quod. Cum non repellat nihil minima quam voluptate blanditiis sequi impedit obcaecati? Aliquid ut dignissimos voluptatibus placeat recusandae nulla nisi mollitia totam eaque perferendis, itaque unde ipsum."/>

            <Info className="info" title="Hobbies" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam perspiciatis consequuntur cupiditate, temporibus, illo rerum laborum, error enim dolorum ipsa officia ipsum aspernatur nostrum neque quae placeat porro consectetur molestiae ullam? Nihil maiores ea nisi reiciendis numquam! Nam minima labore obcaecati dolorum, id accusantium iure nihil sint distinctio autem nostrum ducimus debitis quod. Cum non repellat nihil minima quam voluptate blanditiis sequi impedit obcaecati? Aliquid ut dignissimos voluptatibus placeat recusandae nulla nisi mollitia totam eaque perferendis, itaque unde ipsum."/>
        </div>
        <div id="image-section"></div>
    </div>
  )
}

function Info(props:any) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default About