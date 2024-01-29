import React, { useState } from "react";
import "./OVERVIEW.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OverMW from "../components/OverMW";
import ButtonList from "../components/ButtonList";
import OverVideo from "../components/OverVideo";
import Marquee from "react-fast-marquee";
import OverRecog from "../components/OverRecog";

const types = ["Our Company", "Vision", "Mission"];

const OVERVIEW = () => {
  const [active, setActive] = React.useState(types[0]);

  return (
    <div className="overview3">
      {/* Navbar */}
      <Navbar />

      {/* overview-starting */}
      <div className="overview-section1">
        <div className="overview-image">
          <img
            style={{ filter: "brightness(0.5)" }}
            src="/overviews-start.png"
            alt=""
            height="auto"
            width="100%"
          />

          <div className="overview-heading">
            <h1> DELIVERING VALUE </h1>
          </div>
        </div>
      </div>

      {/* misvis */}

      <div className="head-location">
        <h1>About Us</h1>
      </div>

      <div className="misvis">
        <div className="tabs">
          <div className="tabs-nav">
            {types.map((type) => (
              <div
                className={`nav-item ${active === type ? "active" : ""}`}
                id={type}
                key={type}
                onClick={() => setActive(type)}
              >
                <div className="tabs-image">
                  {type === "Our Company" && <img src="/ourcom1.png" alt="Our Company" />}
                  {type === "Mission" && <img src="/mis1.png" alt="Mission" />}
                  {type === "Vision" && <img src="/vis1.png" alt="Vision" />}
                </div>&nbsp;
                {type}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            <div
              className={`tab-content ${active === "Our Company" ? "active" : ""
                }`}
            >
              <b>L&T-Sargent & Lundy Limited (L&T-S&L)</b> is a renowned
              engineering and consultancy organization with a strong focus on
              the dynamic Power Sector. Established in 1995, it brings together
              the expertise of two esteemed entities: India's Larsen & Toubro
              Limited (L&T) and USA's Sargent & Lundy L.L.C. With over 28 years
              of experience, the company has become a global leader in the power
              industry. Based in Vadodara, it operates from the advanced
              L&T-Knowledge City and boasts a cutting-edge Design Center,
              showcasing innovation. Specializing in Power Plant Engineering &
              Consultancy services, the company covers the entire spectrum from
              concept to commissioning. Notably, it excels in Gas-based,
              sub-critical Coal-based, and pioneering Supercritical Coal-based
              projects. L&T-S&L's dedication is focused on driving power
              industry advancement through innovation, expertise, and unwavering
              commitment to top-notch quality.
            </div>
            <div
              className={`tab-content ${active === "Mission" ? "active" : ""}`}
            >
              We will:
              <ul>
                <li>
                  • Be responsive to customer needs, delivering optimal
                  solutions and value-added services
                </li>
                <li>
                  • Ensure sustainable growth and professional excellence using
                  state-of-the-art technology, process-driven approaches, cost
                  competitiveness, eco-friendly solutions, and IT-enabled tools
                </li>
                <li>
                  • Foster a culture of mutual trust, respect, teamwork,
                  continuous learning, innovation, challenge, and employee
                  empowerment to provide a growth-oriented workplace
                </li>
                <li>
                  • Adhere to fair, transparent, and ethical practices in
                  interactions with all stakeholders, in keeping the tenets of
                  good corporate citizenship
                </li>
                <li>
                  • Remain flexible and agile, continually adapting to the
                  changing business environment
                </li>
              </ul>
            </div>
            <div
              className={`tab-content ${active === "Vision" ? "active" : ""}`}
            >
              To continue to be a leading integrated engineering solutions
              provider in the global thermal power sector and to enhance the
              focus on Green Energy and utilities for other industries,
              continuously creating value for our stakeholders.
            </div>
          </div>
        </div>
      </div>

      {/* MegaWatts */}

      <div className="over_mega">
        <OverMW />
      </div>

      {/* Global footprints */}
      <div className="location">
        <div className="head-location">
          <h1>Our Global Footprint</h1>
        </div>
        <div className="location1">
        <div className="video-global">
          <video loop autoPlay muted controls='' id='video'>
            <source src="/location.mp4" type="video/mp4" />
          </video>
        </div>
        </div>
      </div>

      {/* Recognitions */}
      <div>
        <div className="head-location">
          <h1>Our Recognitions</h1>
        </div>
        {/* <ButtonList /> */}

        <OverRecog />
      </div>

      {/* Clients */}
      <div>
        <div className="head-location">
          <h1>Our Trusted Clients</h1>
        </div>
        <div style={{ paddingBottom: "3rem" }}>
          <Marquee
            className="over_marq"
            autoFill
            speed={50}
            pauseOnHover
          // gradient gradientColor={[225, 241, 255]}
          >
            <img src="/TATA_Logo.png" />
            <img src="/Reliance_Logo.png" />
            <img src="/Renew_Logo.png" />
            <img src="/NTPC_Logo.png" />
            <img src="/Azure_Power_Logo.png" />
            <img src="/Adani_Logo.png" />
            <img src="/client1.png" />
            <img src="/client2.png" />
            <img src="/client3.png" />
            <img src="/client4.png" />
            <img src="/client5.svg" />
            <img src="/client6.jpg" />
          </Marquee>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OVERVIEW;
