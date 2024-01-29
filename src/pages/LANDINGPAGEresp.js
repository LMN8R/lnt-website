import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YearsFormContainer from "../components/YearsFormContainer";
import LandHero from "../components/LandHero";

import "./LANDINGPAGEresp.css";
import Landingslide from "../components/Landingslide";
import { TypeAnimation } from "react-type-animation";

const observeAnimatedClass = (className) => {
  const elements = document.querySelectorAll(`.${className}`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texanim");
        // } else {
        //   entry.target.classList.remove("luckie");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    elements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};

const LANDINGPAGEresp = () => {
  return (
    <div className="landing_page">
      {/* Navbar */}
      <Navbar />
      {/* <Hamburg /> */}
      {/* Slideshow */}
      <LandHero />
      {/* <div className="hero_section">
        <div className="image-slider"></div>
      </div> */}

      <div className="section3">
        <div className="who">
          <div className="land_image_cont">
            <div className="type_land">
              <TypeAnimation
                sequence={["Delivering Value...", 1000, "", 1000]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                style={{
                  // fontSize: "2.4rem",
                  display: "inline-block",
                  color: "grey",
                  width: "100%",
                }}
                repeat={Infinity}
              />
            </div>
            <img src="/who_image.png" alt="" height="auto" width="100%" className="img-whooo" />

          </div>
        </div>

        <div className="intro">
          <div className="tag">
            <h2>Who we are</h2>
          </div>
          <div className="line1">
            <h5>Engineering a</h5>
            <h2 className="text-2xl">
              <b>Sustainable Future !</b>
            </h2>
          </div>
          <div className="para">
            L&T-Sargent & Lundy Limited (L&T-S&L) is a distinguished Engineering
            & Consultancy organization specializing in the Power Sector. Formed
            in 1995, it combines the expertise of Larsen & Toubro Limited (L&T)
            and Sargent & Lundy(S&L) L.L.C. - USA. L&T-S&L offers comprehensive
            Power Plant Engineering services, excelling in Gas-based,
            sub-critical Coal-based and Supercritical Coal-based projects. We
            have successfully engineered Coal-based, Gas-turbine based power
            plants, along with a strong presence in Renewable Energy, T&D, AQCS,
            and R&M sectors. Committed to innovation and quality, we continue to
            drive advancements in the power industry.
          </div>
          <div className="button2">
            <a
              href="#_"
              className="read relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-blue border-solid border-2 border-sky-700  rounded-lg  group hover:bg-lntblue"
            >
              <span className="absolute left-0 block w-full h-0 transition-all  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400  ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative ">Read More </span>
            </a>
          </div>
        </div>
      </div>
      {/* Years */}

      <div className="landing_years">
        <img className="years_background" src="/years_background.png" />
      </div>
      <YearsFormContainer />

      {/* Areas We Serve */}

      <div>
        <div className="areaas">
          <div className="section4">
            <div className="areas">
              {/* <img src="areas_bg.png" alt="" className="bg-img" /> */}

              <div className="container-1">
                <div className="areas-1">
                  <h2>Areas We Serve</h2>
                  <h4>Result-Driven Solutions:</h4>
                  <h3>Sector Expertise at its Best</h3>
                </div>
                <div className="container-areas">
                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="thermal.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Thermal</h2>
                      </div>
                    </div>
                  </a>

                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="renewable.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Renewables</h2>
                      </div>
                    </div>
                  </a>

                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="transmission.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Transmission & Distribution</h2>
                      </div>
                    </div>
                  </a>
                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="treatment.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Water Treatment</h2>
                      </div>
                    </div>
                  </a>

                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="air-quality.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Air Quality control system</h2>
                      </div>
                    </div>
                  </a>

                  <a className="card1" href="#">
                    <div className="card">
                      <div className="container-img">
                        <img src="factory.png" alt="" />
                      </div>
                      <div className="container-heading">
                        <h2>Plant Engineering</h2>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <div className="container-areas">
               
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept To Commissioning */}

      <div className="landing_concept">
        <div className="concept_text">
          <div className="concept_text_1">
            <b>Concept To Commissioning</b>
          </div>

          <div className="concept_text_2">Engineering for</div>
          <div className="concept_text_3">Extraordinary Experiences</div>
        </div>
        <Landingslide />
      </div>

      {/* Projects */}
      <div className="proj_cont">
        <div className="container-project">
          <div className="containerP-heading">
            <h2>Projects</h2>
            <h1>Delivering Aspirations</h1>
            <h4>to New Heights</h4>
          </div>
          {/* <img src="project-bg.png" alt="" className="project-bg-img" /> */}

          <div className="section6">
            <div class="p1">
              <div className="card-project">
                <div className="cardOover">
                  <div className="cardO">
                    <img src="Project-1.png" alt="" />
                  </div>
                </div>
                <div className="cardE">
                  <div className="card-contentP">
                    <p>
                      COAL - Detail Engineering <br></br>
                      2x660 MW NTPC KHARGONE TPP, MP
                    </p>
                    <a href="#">Read More &rarr;</a>
                  </div>
                </div>
              </div>
              <div className="card-project">
                <div className="cardOover">
                  <div className="cardO">
                    <img src="Project-2.png" alt="" />
                  </div>
                </div>
                <div className="cardE">
                  <div className="card-contentP">
                    <p>
                      GAS - Detail Engineering <br></br>
                      4000 MW QURAYYAH IPP, KSA
                    </p>
                    <a href="#">Read More &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p1">
              <div className="card-project card-project1">
                <div className="cardE">
                  <div className="card-contentP">
                    <p>
                      FGD - Detail Engineering <br></br>
                      FGD of 7 Units of NTPC, SINGRAULI
                    </p>
                    <a href="#">Read More &rarr;</a>
                  </div>
                </div>
                <div className="cardOover">
                  <div className="cardO">
                    <img src="Project-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card-project card-project1">
                <div className="cardE">
                  <div className="card-contentP">
                    <p>
                      RE - Detail Engineering <br></br>
                      200 MW Solar Project, BANGLADESH
                    </p>
                    <a href="#">Read More &rarr;</a>
                  </div>
                </div>
                <div className="cardOover">
                  <div className="cardO">
                    <img src="Project-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="touch touch1 touch2">
            <a
              href="#_"
              className="relative inline-flex items-center px-11 py-3 overflow-hidden text-lg font-medium text-white border-solid border-2 border-sky-700  rounded-lg text-white group hover:bg-lntblue"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative_proj">View All Projects</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LANDINGPAGEresp;