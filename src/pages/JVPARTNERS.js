import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./JVPARTNERS.css";
const JVPARTNERS = () => {
  return (
    <div class="jv">

      {/* Navbar */}
      <Navbar />

      {/* start */}
      {/* start */}

      <div className="overview-section1" >
        {/* css in overview */}
        <div className="overview-image">
          <img style={{ filter: 'brightness(0.5)' }} src="/jv-start.png" alt="" height="auto" width="100%" />

          <div className="overview-heading">
            <h1> POWERING THE FUTURE TOGETHER </h1>
            {/* <h5>Where Ideas Illuminate the Path to Progress</h5> */}
          </div></div>
      </div>


      {/* about l&T */}
      <div>
        <div className="about-section2">
          <div className="heading-about">
            <h1>About L&T</h1>
          </div>
          <div className="about-jv">
            <div className="heading-about" style={{ order: '1', flex: '1 2' }}>
              <p>Larsen & Toubro is an Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and Services. It operates in over 50 countries worldwide. A strong, customer-focused approach and the constant quest for top-class quality have enabled L&T to attain and sustain leadership in its major lines of business for over eight decades.
                We are engaged in core, high impact sectors of the economy and our integrated capabilities span the entire spectrum of ‘design to delivery’.
                Every aspect of L&T's businesses is characterised by professionalism and high standards of corporate governance. Sustainability is embedded into our long-term strategy for growth.
                The Company’s manufacturing footprint extends across eight countries in addition to India. L&T has several international offices and a supply chain that extends around the globe</p>
              <a href="">CLICK HERE TO KNOW MORE.</a>
            </div>
            <div className="logo-lt" style={{ order: '2', flex: '2 1' }}>
              <img src="/symbol L&T.png" />
            </div>
          </div>
        </div>
      </div>


      {/* about s&l */}
      <div>
        <div className="about-section3">
          <div className="heading-about" >
            <h1 >About S&L</h1>
          </div>
          <div className="about-jv">
            <div className="heading-about" style={{ order: '2', flex: '2 1' }}>
              <p>In the electricity business, Sargent & Lundy L.L.C. (S&L), with its headquarters in Chicago, is known as a leading consultant. S&L has approximately 125 years of experience offering complete services for challenging power generating and transmission projects. The design company has a track record of success that includes designing 1102 power plants with a combined capacity of 1,57,409 MW for clients in the public and private sectors. These projects include combined cycle power plants, gas and coal-based projects, nuclear power projects, and projects for Renewal Energy.</p>
              <a href="">CLICK HERE TO KNOW MORE.</a>
            </div>
            <div className="logo-lt" style={{ order: '1', flex: '1 2' }}>
              <img src="/symbol S&L.png" />
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />

    </div>
  );
};

export default JVPARTNERS;