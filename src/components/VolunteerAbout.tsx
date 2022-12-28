import React from 'react'
import './../styling/components/VolunteerAbout.css'
import service_award from './../util/imgs/service-award.jpg'
import acs from './../util/imgs/acs.png'
import tri_iran from './../util/imgs/tri-iran.png'
import red_cross from './../util/imgs/red-cross.jpg'


function VolunteerAbout() {
  return (
    <div id="volunteer-about">
        <div id="writing-section">

          <div className="info">
            <h3>The President's Volunteer Service Award</h3>
            <div className="grid service-grid">
              <div className="image-container service-image-container">
                <img src={service_award} alt="President's Volunteer Service Award Certification" />
                <p>Recognition for President's Volunteer Service Award.</p>
              </div>
              <div className="text-container service-text-container">
                <p>
                  I am proud to be recognized with the Gold President's Volunteer Service Award for my dedication to volunteering and community service. Over the past four years, I have contributed over 250 hours of service at AAA Systems Enterprises, where I have not only assisted with administrative tasks and taken on a leadership role in organizing and preparing volunteers, but have also made a significant impact by petitioning for the company to become a certifying organization. This has not only benefited myself and the other volunteers at AAA Systems Enterprises, but has also provided opportunities for others in the community to get involved and make a difference. I am grateful for the recognition of my efforts and will continue to strive for excellence in my service to others, always looking for ways to make a positive impact in my community.
                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>American Cancer Society</h3>
            <div className="grid acs-grid">
              <div className="image-container acs-image-container">
                <img src={acs} alt="American Cancer Society Logo" />
              </div>
              <div className="text-container acs-text-container">
                <p>
                  As a volunteer at the American Cancer Society, a nationwide non-profit organization with the mission of freeing the world from cancer through donations, research, and volunteering, I had the opportunity to make a positive impact on the community. I steamed and sanitized 50+ clothing items each day to be recirculated onto the sales floor at one of the organization's active discovery resale stores, where volunteers are able to aid the cause by coordinating their efforts. In addition, I organized files and supplies to ensure that all volunteers were able to complete their respective tasks effectively. While helping customers with purchases and transactions, I also made an effort to foster positive relationships and promote the organization's mission. I also took on a leadership role in increasing community outreach through the organization's social media accounts. Overall, my volunteering experience at the American Cancer Society was extremely rewarding and I am grateful for the opportunity to contribute to such a meaningful cause.
                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>Iranian American Youth of Tri-Valley</h3>
            <div className="grid tri-grid">
              <div className="image-container tri-image-container">
                <img src={tri_iran} alt="Iranian American Youth of Tri-Valley Logo" />
              </div>
              <div className="text-container tri-text-container">
                <p>
                  As an emcee for the Iranian American Youth of Tri-Valley Organization, I have had the opportunity to lead groups of young Iranian boys and girls in performing traditional Persian dances, songs, and artworks for a diverse audiences of over 150 people. In this role, I have moderated monthly ceremonies and organized the flow of activities to ensure that all performances are completed on time and that each performer is set up for success. In addition to my leadership and organizational skills, I have also contributed personal works of Iranian poetry to our cultural events. I am passionate about sharing my Iranian heritage and cultural traditions with others and am grateful for the opportunity to do so through my involvement in this organization.
                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>American Red Cross</h3>
            <div className="grid red-grid">
              <div className="image-container red-image-container">
                <img src={red_cross} alt="American Red Cross Logo" />
              </div>
              <div className="text-container red-text-container">
                <p>
                  I am honored to have had the opportunity to volunteer with the American Red Cross, a global non-profit organization that works to ensure universal access to essential medical resources including blood products and disaster relief. As a member of the Amador Valley High School chapter, I have attended bi-weekly club meetings to learn about various medical topics and have actively participated in service projects such as the annual blood drive, where I donated blood and assisted with checking in donors. I have also participated in Socks in the City, providing socks to those in need in San Francisco in order to prevent foot infections and other health issues. My involvement with the American Red Cross has not only allowed me to make a positive impact in my community, but has also provided me with valuable knowledge and experience. I am grateful for this opportunity and am committed to continuing to support the important work of the American Red Cross.
                </p>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}


export default VolunteerAbout