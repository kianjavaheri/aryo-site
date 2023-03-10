import React from 'react'
import './../styling/components/ProgramsAbout.css';
import uchicago from './../util/imgs/uchicago.jpg'
import duke_behavioral from './../util/imgs/duke-behavioral.jpg'
import duke_defi from './../util/imgs/duke-defi.jpg'
import upenn from './../util/imgs/upenn.jpg'
import laspo from './../util/imgs/laspo.jpg'

function ProgramsAbout() {
  return (
    <div id="programs-about">
      <div id="writing-section">

        <div className="info">
          <h3>University of Chicago Pathways in Economics Summer Session</h3>
          <div className="grid uchicago-grid">
            <div className="image-container uchicago-image-container">
              <img src={uchicago} alt="Dr. Victor O. Lima" />
              <p>Dr. Victor O. Lima explains the game theory implications of microeconomics using tree diagrams.</p>
            </div>
            <div  className="text-container uchicago-text-container">
              <h3>Grade: A</h3>
              <p>
                I was one of 44 students selected from around the world to conduct research on topics including game theory and field experiments at The University of Chicago, expanding my scope on the real-world applications of economics. Under the supervision of Dr. Kanit Kuevibulvanich, I had the opportunity to deepen my understanding of economic trends and patterns at a micro and macro scale and received a recommendation from TA Johann Hatzius of the Kenetth C. Griffin Department of Economics. Additionally, I was responsible for organizing and presenting a research project on the Centipede Game and its game theory implications of rational consumer choices.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Duke Extension Certificate: Behavioral Finance</h3>
          <div className="grid duke-a-grid">
            <div className="image-container duke-a-image-container">
              <img src={duke_behavioral} alt="Duke Certificate" />
              <p>Recognition for completion of certificate program.</p>
            </div>
            <div  className="text-container duke-a-text-container">
              <h3>Grade: A</h3>
              <p>
                In this course, I delved into the field of behavioral finance, which is the study of how psychology and emotions can impact financial decision-making. I examined a range of predictable errors that individuals may make when it comes to financial matters, such as overconfidence, framing, and loss aversion. By gaining an understanding of these biases and how they can affect our choices, I aimed to learn how to avoid making these mistakes and make more informed, rational financial decisions. The goal of this course was to guide participants towards better financial outcomes by improving their spending, saving, and investing habits. The course focused on strategies for achieving long-term financial success, such as setting and working towards financial goals, creating a budget, and considering the risks and potential returns of different investment options. Overall, this course was designed to help participants make informed, confident financial choices that will benefit them in the future.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Duke Extension Certificate: Decentralized Finance (DeFi): The Future of Finance Specialization</h3>
          <div className="grid duke-b-grid">
            <div className="image-container duke-b-image-container">
              <img src={duke_defi} alt="Duke Certificate" />
              <p>Recognition for completion of certificate program.</p>
            </div>
            <div  className="text-container duke-b-text-container">
              <h3>Grade: A</h3>
              <p>
                In this four-course learning experience, I explored the concept of decentralized finance (DeFi), which is a new technology that allows users to interact directly with algorithms or smart contracts rather than through traditional financial intermediaries like banks or insurance companies. DeFi has the potential to revolutionize finance as we know it by addressing issues such as lack of inclusion, inefficiency, centralized control, and lack of interoperability in traditional finance. 
                <br/>
                <br/>
                The first course, DeFi Infrastructure, focused on the history of DeFi and the problems that it aims to solve. The second course, DeFi Primitives, covered the mechanics, supply and ownership, and loans and swaps in DeFi. The third course, DeFi Deep Dive, examined leading DeFi protocols such as MakerDAO, Compound, Aave, Uniswap, and dYdX. The fourth and final course, DeFi Risks and Opportunities, analyzed key risks associated with DeFi, including smart contract risk, governance risk, and scaling, as well as regulatory issues. This course also looked at the potential impact of DeFi on the future of finance, including which organizations and industries may emerge as winners or losers. Overall, this learning experience aimed to provide a comprehensive understanding of DeFi and its potential to shape the future of finance.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>University of Pennsylvania Extension Certificate: Fintech: Foundations & Applications of Financial Technology Specialization</h3>
          <div className="grid upenn-grid">
            <div className="image-container upenn-image-container">
              <img src={upenn} alt="University of Pennsylvania Certificate" />
              <p>Recognition for completion of certificate program.</p>
            </div>
            <div  className="text-container upenn-text-container">
              <h3>Grade: A</h3>
              <p>
                As part of my education, I completed Wharton's Fintech Specialization, a comprehensive program designed to introduce students to the key concepts and real-world applications of financial technologies. Through case studies of successful companies in the field led by Wharton, I gained a deep understanding of the essential components of technology-driven financial strategies, including complex regulations, cryptocurrency, and portfolio optimization. During the Specialization, I also learned about modern investment strategies that use technology to achieve optimal results, the disruptive impact of changing payment methods, and the evolving regulatory landscape. I gained a deeper understanding of innovative financial technologies such as robo-advising, crowdfunding, peer-to-peer lending, and blockchain. By the end of the program, I was able to make informed decisions about deploying financial technologies for my own benefit or for my business, giving me a competitive edge in using the latest financial innovations. Overall, this Specialization provided me with a strong foundation in the field of fintech and equipped me with the knowledge and skills to succeed in the world of financial technology.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider"/>

        <div className="info">
          <h3>Las Positas Community College: Principles of Microeconomics</h3>
          <div className="grid laspo-grid">
            <div className="image-container laspo-image-container">
              <img src={laspo} alt="Las Positas Logo" />

            </div>
            <div  className="text-container laspo-text-container">
              <h3>Grade: A</h3>
              <p>
                As part of my education at Las Positas Community College, I took an introductory course in microeconomics. Through this course, I learned about all the fundamental principles of microeconomics, including supply and demand, market structures, and consumer and producer behavior. I gained an understanding of how these principles can be used to analyze and make informed decisions about issues such as pricing, resource allocation, and market efficiency. Overall, this course provided me with a strong foundation in microeconomic theory and the tools to analyze and understand economic phenomena at the level of individual households and firms.
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  )
}
 
export default ProgramsAbout