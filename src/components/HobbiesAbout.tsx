import React from 'react'
import './../styling/components/HobbiesAbout.css';
import lacrosse from './../util/imgs/lacrosse.jpg'
import garden from './../util/imgs/garden.jpg'
import resell from './../util/imgs/resell.png'
import fantasy from './../util/imgs/fantasy.png'

function HobbiesAbout() {
  return (
    <div id="hobbies-about">
        <div id="writing-section">
            {/* <Info title="Lacrosse" image={lacrosse} imagename="lacrosse.jpg" altdesc="lacrosse-team" desc='As a dedicated lacrosse player, I have had the opportunity to compete in the EBAL League since my freshman year, ultimately earning a varsity position as a sophomore. I have attended practice four times a week and competed in games twice a week, consistently working to improve my skills and support my team. In addition to my dedication to my own development, I have also served as a mentor to underclassmen and new players, teaching them the basics of proper technique and team communication skills. My hard work and dedication to the sport have been recognized with the 2021 title of "Most Improved Player". I am grateful for the opportunity to play lacrosse and am committed to continuing to grow and develop as a player.'/> */}
            <div className="info">
              <h3>Lacrosse</h3>
              <div id="lacrosse">
                <p>As a dedicated lacrosse player, I have had the opportunity to compete in the EBAL League since my freshman year, ultimately earning a varsity position as a sophomore. I have attended practice four times a week and competed in games twice a week, consistently working to improve my skills and support my team. In addition to my dedication to my own development, I have also served as a mentor to underclassmen and new players, teaching them the basics of proper technique and team communication skills. My hard work and dedication to the sport have been recognized with the 2021 title of "Most Improved Player". I am grateful for the opportunity to play lacrosse and am committed to continuing to grow and develop as a player.</p>
              </div>
            </div>
{/* 
            <Info title="Gardening" image={garden} imagename="garden.jpg" altdesc="garden" desc="I have always been drawn to the peaceful and calming nature of gardening. From planting and nurturing new life to pruning and shaping existing plants, the process of cultivating and maintaining a thriving garden brings me great joy and a sense of accomplishment. As I work in my garden, I am able to escape the stress of daily life and find a sense of calm and connection to the natural world. Whether I am learning new techniques or simply taking in the beauty of what I have created, I am always excited to share my love of gardening with others. It is a hobby that brings me great peace and helps me to be fully present in the moment."/>

            <Info title="Sneaker Reselling" image={resell} imagename="resell.png" altdesc="resell-info" desc="I have a strong entrepreneurial spirit and a passion for the sneaker industry, which I cultivate through my hobby of reselling sneakers. I use online platforms such as Depop and StockX to sell sneakers that I have purchased at retail price, using my business acumen to generate profit and set goals for myself. In addition to these online platforms, I also cultivate personal relationships with buyers at sneaker conventions in order to better understand their needs and ensure that my feedback ratings remain high. Reselling sneakers allows me to combine my love of fashion and business, and I am always looking for new ways to grow and improve my skills as a reseller."/>

            <Info title="Fantasy Football" image={fantasy} imagename="fantasy.png" altdesc="fantasy-football" desc="As a competitive fantasy football player, I am always seeking ways to gain an edge over my opponents. One of the ways I do this is by using statistics to inform my start sit decisions. I am constantly studying player performance data and analyzing trends in order to make informed choices about which players to start or sit in a given week. I also pay close attention to factors such as team matchups and player injuries in order to make the best possible decisions for my fantasy team. While luck is always a factor in fantasy football, I believe that by using data and analysis to guide my decisions, I am able to give myself the best chance to succeed. Fantasy football is a hobby that allows me to combine my love of sports with my analytical skills, and I always look forward to the challenges and strategic decisions it presents."/> */}
        </div>

    </div>
  )
}

// function Info(props:any) {
//     return (
//       <div className="info">
//         <h3>{props.title}</h3>
//         <img src={props.image} alt={props.altdesc}/>
//         <p>{props.desc}</p>
//       </div>
//     );
//   }

function Info(props:any) {
  // const balls = `url("./../util/imgs/${props.imagename}");`
  // url("./../util/imgs/lacrosse.jpg");
  return (
    <div className="info">
      <h3>{props.title}</h3>
      {/* <div className="card" style={{background: `"${balls}"`}}>  */}
      {/* <div className="card" data-image='url("./../util/imgs/lacrosse.jpg");'>  */}
      <div style={{background: 'url("./../util/imgs/lacrosse.jpg");'}}> 
      balls
      {/* blls */}
      {/* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("./../../util/imgs/lacrosse.jpg"); */}
      {/* <div className="card">  */}
      {/* <p>{props.desc}</p> */}
      </div>
    </div>
  );
}

export default HobbiesAbout