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

        <div className="info">
          <h3>Lacrosse</h3>
          <div className="grid lacrosse-grid">
            <div className="image-container lacrosse-image-container">
              <img src={lacrosse} alt="AVHS Lacrosse Team" />
              <p>2020-2021 Varsity Lacrosse Pleasanton Champions after beating rival Foothill High School.</p>
            </div>
            <div  className="text-container lacrosse-text-container">
              <p>
                As a dedicated lacrosse player, I have had the opportunity to compete in the EBAL League since my freshman year, ultimately earning a varsity position as a sophomore. I have attended practice four times a week and competed in games twice a week, consistently working to improve my skills and support my team. In addition to my dedication to my own development, I have also served as a mentor to underclassmen and new players, teaching them the basics of proper technique and team communication skills. My hard work and dedication to the sport have been recognized with the 2021 title of "Most Improved Player". I am grateful for the opportunity to play lacrosse and am committed to continuing to grow and develop as a player.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Lacrosse</h3>
          <div className="grid garden-grid">
            <div className="image-container garden-image-container">
              <img src={garden} alt="Aryo Garden" />
              <p>A bright summer day in my garden.</p>
            </div>
            <div  className="text-container garden-text-container">
              <p>
                I have always been drawn to the peaceful and calming nature of gardening. From planting and nurturing new life to pruning and shaping existing plants, the process of cultivating and maintaining a thriving garden brings me great joy and a sense of accomplishment. As I work in my garden, I am able to escape the stress of daily life and find a sense of calm and connection to the natural world. Whether I am learning new techniques or simply taking in the beauty of what I have created, I am always excited to share my love of gardening with others. It is a hobby that brings me great peace and helps me to be fully present in the moment.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Sneaker Reselling</h3>
          <div className="grid resell-grid">
            <div className="image-container resell-image-container">
              <img src={resell} alt="Monthly StockX Account Summary" />
              <p>Average monthly StockX account summary, displaying net profits.</p>
            </div>
            <div  className="text-container resell-text-container">
              <p>
                I have a strong entrepreneurial spirit and a passion for the sneaker industry, which I cultivate through my hobby of reselling sneakers. I use online platforms such as Depop and StockX to sell sneakers that I have purchased at retail price, using my business acumen to generate profit and set goals for myself. In addition to these online platforms, I also cultivate personal relationships with buyers at sneaker conventions in order to better understand their needs and ensure that my feedback ratings remain high. Reselling sneakers allows me to combine my love of fashion and business, and I am always looking for new ways to grow and improve my skills as a reseller.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Fantasy Football</h3>
          <div className="grid fantasy-grid">
            <div className="image-container fantasy-image-container">
              <img src={fantasy} alt="Fantasy Football Stat Plot Example" />
              <p>Example of stat plots I frequently create when making start/sit decisions.</p>
            </div>
            <div  className="text-container fantasy-text-container">
              <p>
                As a competitive fantasy football player, I am always seeking ways to gain an edge over my opponents. One of the ways I do this is by using statistics to inform my start sit decisions. I am constantly studying player performance data and analyzing trends in order to make informed choices about which players to start or sit in a given week. I also pay close attention to factors such as team matchups and player injuries in order to make the best possible decisions for my fantasy team. While luck is always a factor in fantasy football, I believe that by using data and analysis to guide my decisions, I am able to give myself the best chance to succeed. Fantasy football is a hobby that allows me to combine my love of sports with my analytical skills, and I always look forward to the challenges and strategic decisions it presents.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HobbiesAbout