import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThermalMarquee from "../components/ThermalMarquee";
import "./Thermal.css";
import React, { useState } from "react";

function Thermal() {
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);

  // Function to toggle the visibility of the hidden content.
  const toggleHiddenContent = () => {
    setIsHiddenVisible(!isHiddenVisible);
  };
  return (
    <div className="thermal_container">
      <Navbar />

      <div className="overview-section1">
        {/* css in overview */}
        <div className="overview-image">
          <img
            style={{ filter: "brightness(0.5)" }}
            src="/thermal_hero.png"
            alt=""
            height="auto"
            width="100%"
          />
          <div className="overview-heading">
            <h1> THERMAL </h1>
          </div>
        </div>
      </div>

      {/* Overview */}

      <div className="thermal_overview">
        <div className="head-location">
          <h1>Overview</h1>
        </div>
        <div className="to_content">
          <p>
            India's thermal power industry, which depends on coal, gas, and oil
            for its energy demands, is an essential one and is rapidly
            expanding. However, problems with the environment, the availability
            of coal, and modernization continue. To cut pollution, the
            government supports greener technologies like supercritical boilers.
          </p>
          <br></br>
          <p>
            With a global clientele, L&T-S&L is a leader in power plant
            engineering, managing gas-based, sub-critical, and supercritical
            coal-based projects. L&T-S&L is a trusted consultant for
            all-inclusive engineering services in the industry, whether they are
            domestic or worldwide.
          </p>{" "}
        </div>
      </div>

      {/* Key highlights */}
      <div className="thermal_highlights">
        <div className="head-location">
          <h1>Key Highlights</h1>
        </div>

        <div className="overmw_container">
          <div className="years_section">
            <div className="years_1">
              <div className="years_desc">
                Engineered more than 60 GW of Thermal Power Projects (coal &
                gas) across the globe.
              </div>
            </div>
          </div>
          <div className="overmw_bl4" />
          <div className="overmw_bl5" />

          <div className="years_section">
            <div className="years_1">
              <div className="years_desc">
                Designed India’s 1st Ultra-supercritical Power Project.
              </div>
            </div>
          </div>

          <div className="years_section">
            <div className="years_1">
              <div className="years_desc">
                Engineered World’s Largest Combined Cycle Power Plant.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image marquee */}
<div className="thermal_marquee_container">
      <div className="thermal_marquee">
        <ThermalMarquee />
      </div></div>

      {/* thermal projects section */}
      <div className="thermal_projects_container_cont">
<div className="thermal_projects_container">
<div className="thermal_projects_col">
    <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_1.png" alt=""></img>
                    <h2>750 MW Sabiya ‐3 CCGT Power Plant, Kuwait</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_1.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_2.png" alt=""></img>
                    <h2>400 MW Bibiyana III CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_2.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
    <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_3.png" alt=""></img>
                    <h2>225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_3.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/dummy.jpg" alt=""></img>
                    <h2>360 MW Bheramara CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/dummy.jpg" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
    {isHiddenVisible && (<div className="thermal_projects_hidden">
              <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_3.png" alt=""></img>
                    <h2>225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_3.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/dummy.jpg" alt=""></img>
                    <h2>360 MW Bheramara CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/dummy.jpg" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
              <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_3.png" alt=""></img>
                    <h2>225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_3.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/dummy.jpg" alt=""></img>
                    <h2>360 MW Bheramara CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/dummy.jpg" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
              <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_3.png" alt=""></img>
                    <h2>225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_3.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/dummy.jpg" alt=""></img>
                    <h2>360 MW Bheramara CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/dummy.jpg" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
              <div class="thermal_projects">
        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/thermarq_3.png" alt=""></img>
                    <h2>225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/thermarq_3.png" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="left-page">
                <div class="page page-1">
                    <img src="/dummy.jpg" alt=""></img>
                    <h2>360 MW Bheramara CCPP, Bangladesh</h2>
                </div>
                <div class="page page-2">
                    <img src="/dummy.jpg" alt=""></img>
                </div>
            </div>
            <div class="right-page">
                <div class="page page-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante orci, tincidunt et placerat sed, varius nec odio.</p>
                    <button>View Project</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )}
</div>
<div className="thermal_button_container">
<button className="thermal_button" onClick={toggleHiddenContent}>
            {isHiddenVisible ? "SHOW LESS" : "EXPLORE MORE"}
          </button></div>
</div></div>

    {/* footer */}
      <Footer />
    </div>
  );
}

export default Thermal;