import React from 'react'
import './../styling/components/ClubsAbout.css';
import deca_cfo from './../util/imgs/deca-cfo.png'
import deca from './../util/imgs/deca.png'
import sports from './../util/imgs/sports.png'
import investment from './../util/imgs/investment.jpg'
import middle_east from './../util/imgs/middle-east.jpg'

function ClubsAbout() {
  return (
    <div id="clubs-about">
        <div id="writing-section">

            <div className="info">
            <h3>DECA (Distributive Education Clubs of America)</h3>
                <div className="grid deca-a-grid">
                    <div className="image-container deca-a-image-container">
                        <img src={deca_cfo} alt="DECA Introduction Post" />
                        <p>Introductory media post to CFO position.</p>
                    </div>
                    <div className="text-container deca-a-text-container">
                        <h3>Position: Chief Financial Officer</h3>
                        <p>
                            As the Chief Financial Officer for the Amador Valley DECA chapter, I am responsible for managing our finances and ensuring that our organization is operating efficiently and effectively. One of my key tasks is creating monthly budgets and purchase requisitions, which involves forecasting our financial needs and allocating resources accordingly. I work closely with TVROP Superintendent Julie Duncan to ensure that our financial decisions align with our goals and objectives. In addition to budgeting and purchasing, I am also responsible for tracking and reporting on our financial performance, identifying potential cost savings or revenue opportunities, and implementing financial controls to mitigate risk. Overall, my role as CFO involves using my financial expertise to support the ongoing success and sustainability of my DECA chapter.
                        </p>
                    </div>
                </div>

                <div className="grid deca-b-grid">
                    <div className="image-container deca-b-image-container">
                        <img src={deca} alt="DECA Wheel" />
                    </div>
                    <div className="text-container deca-b-text-container">
                        <h3>5th Place: Principles of Business Management (Individual Event)</h3>
                        <p>
                            As the Chief Financial Officer for the Amador Valley DECA chapter, I am responsible for managing our finances and ensuring that our organization is operating efficiently and effectively. One of my key tasks is creating monthly budgets and purchase requisitions, which involves forecasting our financial needs and allocating resources accordingly. I work closely with TVROP Superintendent Julie Duncan to ensure that our financial decisions align with our goals and objectives. In addition to budgeting and purchasing, I am also responsible for tracking and reporting on our financial performance, identifying potential cost savings or revenue opportunities, and implementing financial controls to mitigate risk. Overall, my role as CFO involves using my financial expertise to support the ongoing success and sustainability of my DECA chapter.
                        </p>
                    </div>
                </div>

                <div className="grid deca-c-grid">
                    <div className="image-container deca-c-image-container">
                        <img src={sports} alt="Play It Again Sports Logo" />
                    </div>
                    <div className="text-container deca-c-text-container">
                        <h3>6th Place: Sports and Entertainment Operations Research (Group Event)</h3>
                        <p>
                            At the California State Career Development Conference (SCDC), I had the opportunity to work as part of a team of 2 other peers to develop a viable business operations plan that demonstrated our creativity and ability to define objectives. The competition required us to create a plan that addressed a real-world business challenge, and we spent at least 4 months analyzing and researching internal and external metrics related to the employee experience at a local sporting goods business, Play It Again Sports. Based on our research, we designed a 4-pronged plan and presented it to a panel of judges in a 15-minute group presentation, along with a 20-page written report that detailed our proposed solution. Despite facing strong competition from other teams, we were proud to place 6th in the event. This was a challenging and rewarding opportunity to apply our business knowledge and skills to a real-world problem, and we learned a lot from the experience.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="divider"/>

            <div className="info">
            <h3>Investment Club</h3>
                <div className="grid ic-grid">
                    <div className="image-container ic-image-container">
                        <img src={investment} alt="Investment Club Graphic" />
                    </div>
                    <div className="text-container ic-text-container">
                        <p>
                            As a member of the Amador Valley Investment club, I actively participated in the club's weekly meetings where I learned and applied various investment tactics. I also competed in the annual Amador Valley Stock Market Game, where I placed in the top 20 out of all participants. This competition simulated real world global capital markets and investments, allowing me to hone my skills in this area. In addition, I was recognized for my outstanding individual project performance on mutual funds, in which I demonstrated a thorough understanding of the limitations of trusts. Overall, my involvement in the Amador Valley Investment club has been a valuable and enriching experience, helping me to develop my knowledge and skills in the fields of finance and investing.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="divider"/>

            <div className="info">
            <h3>Middle Eastern Club</h3>
                <div className="grid mec-grid">
                    <div className="image-container mec-image-container">
                        <img src={middle_east} alt="Middle East Map" />
                        <p>Places of study within Middle Eastern Club.</p>
                    </div>
                    <div className="text-container mec-text-container">
                        <p>
                            As a member of the Amador Valley Middle Eastern Club, I had the opportunity to contribute to the sharing of Iranian culture with the rest of the club. This included introducing members to traditional music, food, and poetry from my own cultural background. In addition to sharing my own culture, I also had the chance to learn about a variety of unique Middle Eastern cultures through the club's activities and discussions. Participating in the Amador Valley Middle Eastern Club has been a rewarding and enriching experience, allowing me to both share and expand my knowledge of the rich and diverse cultures of the Middle East.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ClubsAbout