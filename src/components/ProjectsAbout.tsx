import React from 'react'
import './../styling/components/ProjectsAbout.css'
import fingrad from './../util/imgs/fingrad.jpg'


function ProjectsAbout() {
  return (
    <div id="projects-about">
      <div id="writing-section">

        <div className="info">
          <h3>FinGrad Inc.</h3>
          <div className="grid fingrad-a-grid">
            <div className="image-container fingrad-a-image-container">
              <img src={fingrad} alt="Fingrad Entry" />
              <p>Official nonprofit registration within state of California.</p>
            </div>
            <div className="text-container fingrad-a-text-container">
              <h3>Inspiration</h3>
              <p>
                Growing up in the Bay Area, I was struck by the contrast between the promises of financial success advertised on billboards and the struggles of low-income neighborhoods in my own community. This led me to question why there seemed to be such a disconnect between those who need financial services the most and those who have access to them. This inspired me to create FinGrad Inc., a nonprofit organization that aims to bridge this gap and provide equal opportunities for financial success to all, particularly those in underserved communities.
              </p>
            </div>
          </div>

          <div className="grid fingrad-b-grid">
            <div className="text-container fingrad-b-text-container">
              <h3>Logistics</h3>
              <p>
                At FinGrad Inc., we believe that everyone deserves access to financial education and resources, regardless of their income level or background. That's why we offer free financial advice to low-income college students located throughout California through a range of programs and services. These include weekly Zoom seminars on topics like debt management and budgeting, as well as unique monthly budgeting sheets that provide personalized guidance on how to manage money and achieve financial stability.
                <br/>
               <br/>
                In addition to these group resources, we also offer private one-on-one counseling to help students understand and implement the 50-30-20 budget rule, which is a popular method for dividing income into three categories: needs, wants, and savings. We also conduct extensive monthly surveys to measure the concerns and needs of our participants, so that we can continuously improve and tailor our services to best meet their needs.
                <br/>
                <br/>
                Overall, my passion for creating a healthy, equitable community drives everything we do at FinGrad Inc. I believe that by providing equal opportunities for financial success, we can help build a stronger, more prosperous society for all.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectsAbout