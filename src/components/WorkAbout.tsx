import React from 'react'
import './../styling/components/WorkAbout.css'
import tirgan from './../util/imgs/tirgan.jpg'
import full_bloom from './../util/imgs/full-bloom.png'
import walmart from './../util/imgs/walmart.png'

function WorkAbout() {
  return (
    <div id="work-about">
        <div id="writing-section">
          
          <div className="info">
            <h3>Tirgan - Unpaid Internship</h3>
            <div className="grid tirgan-grid">
              <div className="image-container tirgan-image-container">
                <img src={tirgan} alt="Tirgan Logo" />
              </div>
              <div className="text-container tirgan-text-container">
                <h3>August 2020 - Present</h3>
                <p>
                  During my internship at Tirgan, an annual Iranian festival in Toronto, I have regularly performed maintenance tasks on the website to ensure that all information regarding hundreds of Iranian performers and professional speakers is kept easily accessible. I also collect and organize data within spreadsheets to keep track of important information pertaining to the organization's operations. In addition, I have had the privilege of attending the annual festival twice in order to build leadership skills within the Iranian community and promote the organization as a whole. At the festival, I had the opportunity to interact with and learn from a variety of professionals and community leaders, truly allowing me to connect with my Persian heritage. Overall, my internship has provided me with valuable hands-on experience in website maintenance, data management, and community engagement.
                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>AAA Systems Enterprises - Unpaid Internship</h3>
            <div className="grid aaa-grid">
              <div className="text-container aaa-text-container">
                <h3>October 2019 - Present</h3>
                <a href="http://aaasystemsdesign.com" target="_blank" rel="noopener noreferrer">Website Link</a>
                <p>
                I currently work with the general manager, Ali Moayer, to create spreadsheets using Microsoft Excel to efficiently store all volunteer data. As the Director of Volunteers, I am responsible for providing training materials and conducting interviews for all prospective volunteers. I also play a key role in recruiting new volunteers to join our team. So far, my efforts have been recognized with the Gold PVSA award after completing over 250 hours of service.
                <br/>
                <br/>
                Our corporation is based in Silicon Valley and focuses on providing medical equipment to countries in need within the MENA region. We use turnkey product development, engineering analysis, and subassembly development to meet the needs of our clients. In addition to our main operations, we also embrace collaboration and value the contributions of volunteers. I am proud to be a part of this organization and the meaningful work that we do.

                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>Full Bloom Learning Center - Unpaid Internship</h3>
            <div className="grid fbloom-grid">
              <div className="image-container fbloom-image-container">
                <img src={full_bloom} alt="Full Bloom Logo" />
              </div>
              <div className="text-container fbloom-text-container">
                <h3>December 2021 - Present</h3>
                <p>
                  As a marketing intern, I am responsible for implementing touchpoints for Bay Area residents through social media outlets such as Instagram and Facebook. In this role, I maintain a strong presence on our website and frequently send out bilingual satisfaction polls focused on diversity and inclusion. Through my efforts, I have successfully improved daily tracked website activity by 120% and average time spent on the website by 80% by crafting engaging and high-quality design.
                  <br/>
                  <br/>
                  In my role as a marketing intern, I have gained valuable experience in social media management and website maintenance. I take pride in my work and am committed to ensuring that our outreach efforts are effective and well-received by our community. By using social media and website tools, I am able to connect with residents and gather valuable feedback that helps us to improve and better serve our audience.
                </p>
              </div>
            </div>
          </div>

          <hr className="divider"/>

          <div className="info">
            <h3>Walmart - Paid Work</h3>
            <div className="grid walmart-grid">
              <div className="image-container walmart-image-container">
                <img src={walmart} alt="Walmart Logo" />
              </div>
              <div className="text-container walmart-text-container">
                <h3>July 2021 - September 2021</h3>
                <p>
                  During my job at Walmart, I served multiple roles including cashier and customer service. I learned the importance of courteous service in creating positive customer relations and worked to encourage this in my interactions with customers. In addition, I was responsible for processing return transactions and updating the cash register settings daily. I gained experience working with both cash and card payments, and was able to accurately totalize customer transactions. My hard work and leadership skills were recognized by management, and I was eventually offered a cashier management role as a result. Overall, my time at Walmart taught me valuable skills in customer service, cash handling, and leadership.
                </p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default WorkAbout