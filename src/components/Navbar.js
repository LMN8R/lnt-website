import React, { useEffect } from "react";
import { useState } from "react";

import "../../src/fonts/SourceSansPro-Regular.otf";
import "./Navbar.css";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the search bar visibility
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="nav_section_1">
        <nav className="navbar">
          <div className="brand-title">
            <img className="logoo" src="/ltlogo.png" alt="" />
          </div>
          {/* <div className="tog_cont"> */}
          <input id="menu-toggle" type="checkbox" />
          <div className="hamburg">
            <label class="menu-button-container">
              {" "}
              <li>
                {" "}
                <a href="/">
                  <img className="homeicon" alt="" src="/homeicon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="linkedinnav" alt="" src="/linkedinnav.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="grpwebsite" alt="" src="/grpwebsite.png" />
                </a>
              </li>
              <li>
                <a>
                  <img className="searchicon" alt="" src="/searchicon.png" onClick={handleSearchIconClick} />
                </a>
              </li>
              <li>
                <label class="menu-button-container" for="menu-toggle">
                  {/* <div class="menu-button"></div> */}
                  <div
                    id="nav-icon3"
                    className={`icon ${isOpen ? "open" : ""}`}
                    onClick={handleIconClick}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </label>{" "}
              </li>{" "}
            </label>
          </div>

          <ul class="menu">
            <li>
              <div className="accordion" onClick={() => toggleAccordion(1)}>
                <div class="hover-underline-animation">About-us</div>
              </div>
            </li>
            <div class="a_1">
              <div className={`panel ${activeIndex === 1 ? "active" : ""}`}>
                <li>
                  <a href="overview">
                    <div className="righ">
                      <div class="hover-underline-animation">Overview</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="jv-partners">
                    <div className="righ">
                      <div class="hover-underline-animation">JV Partners</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Policies & Frameworks
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">Technology</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="management">
                    <div className="righ">
                      <div class="hover-underline-animation">Management</div>
                    </div>
                  </a>
                </li>
                {/* <li><a href='#0'><div className="righ"><div class="hover-underline-animation">Our Team</div></div></a></li> */}
              </div>
            </div>

            <li>
              <div className="accordion" onClick={() => toggleAccordion(2)}>
                <div class="hover-underline-animation">Sectors</div>
              </div>
            </li>
            <div class="a_1">
              <div className={`panel ${activeIndex === 2 ? "active" : ""}`}>
                <li>
                  <a href="thermal">
                    <div className="righ">
                      <div class="hover-underline-animation">Thermal</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Rebewable Projects
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Transmission & Distribution
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Air Quality Control System
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Water Treatment
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Plant Engineering for utilities
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <li>
              <div className="accordion" onClick={() => toggleAccordion(3)}>
                <div class="hover-underline-animation">Services</div>
              </div>
            </li>
            <div class="a_1">
              <div className={`panel ${activeIndex === 3 ? "active" : ""}`}>
                <li>
                  <a href="detail-engineering">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Basic/Detail Engineering
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Owner's Engineering
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Lender's Engineering
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">PMC</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">R&M Services</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Special Engineering
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            </div>

            <li>
              <a href="investors">
                <div class="hover-underline-animation">Investors</div>
              </a>
            </li>
            <li>
              <div className="accordion" onClick={() => toggleAccordion(4)}>
                <div class="hover-underline-animation">Media</div>
              </div>
            </li>
            <div class="a_1">
              <div className={`panel ${activeIndex === 4 ? "active" : ""}`}>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        News & Updates
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">Blogs</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Technical Papers
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            </div>

            <li>
              <div className="accordion" onClick={() => toggleAccordion(5)}>
                <div class="hover-underline-animation">Careers</div>
              </div>
            </li>

            <div class="a_1">
              <div className={`panel ${activeIndex === 5 ? "active" : ""}`}>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Life @ L&T-S&L
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">
                        Open Positions
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <div className="righ">
                      <div class="hover-underline-animation">Testimonials</div>
                    </div>
                  </a>
                </li>
              </div>
            </div>

            <li>
              <div class="hover-underline-animation">Contact</div>
            </li>
          </ul>
          {/* <a href="#" className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a> */}
          {/* </div> */}
          <div className="navbar-links">
            <ul>
              <li>
                <a href="/">
                  <img className="homeicon" alt="" src="/homeicon.png" />
                </a>
              </li>

              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <a href="#">
                      <div class="hover-underline-animation">About-us</div>
                    </a>
                  </div>
                  <div className="dropdown-content dropdown_menu-7">
                    <a href="overview">
                      <div className="righ">
                        <div class="hover-underline-animation">Overview</div>
                      </div>
                    </a>
                    <a href="jv-partners">
                      <div className="righ">
                        <div class="hover-underline-animation">JV Partners</div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Policies & Frameworks
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Technologies
                        </div>
                      </div>
                    </a>
                    <a href="management">
                      <div className="righ">
                        <div class="hover-underline-animation">Management</div>
                      </div>
                    </a>
                    {/* <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">Our Team</div>
                      </div>
                    </a> */}
                  </div>
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <a href="#">
                      <div class="hover-underline-animation">Sectors</div>
                    </a>
                  </div>
                  {/* {isDropdownOpen && ( */}
                  <div className="dropdown-content dropdown_menu-7">
                    <a href="thermal">
                      <div className="righ">
                        <div class="hover-underline-animation">Thermal</div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Renewable Projects
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Transmission & Distribution
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Air Quality Control System
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Water Treatment
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Plant Engineering for utilities
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <a href="#">
                      <div class="hover-underline-animation">Services</div>
                    </a>
                  </div>
                  {/* {isDropdownOpen && ( */}
                  <div className="dropdown-content dropdown_menu-7">
                    <a href="detail-engineering">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Basic/Detail Engineering
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Owner's Engineering
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Lender's Engineering
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">PMC</div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          R&M Services
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Special Engineering
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* )} */}
                </div>
              </li>
              <li>
                <a href="investors">
                  <div class="hover-underline-animation">Investors</div>
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <a href="#">
                      <div class="hover-underline-animation">Media</div>
                    </a>
                  </div>
                  {/* {isDropdownOpen && ( */}
                  <div className="dropdown-content dropdown_menu-7">
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          News & Updates
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">Blogs</div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Technical Papers
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* )} */}
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <a href="#">
                      <div class="hover-underline-animation">Careers</div>
                    </a>
                  </div>
                  {/* {isDropdownOpen && ( */}
                  <div className="dropdown-content dropdown_menu-7">
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Life @ L&T-S&L
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">
                          Open Positions
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="righ">
                        <div class="hover-underline-animation">Testimonals</div>
                      </div>
                    </a>
                  </div>
                  {/* )} */}
                </div>
              </li>
              <li>
                <a href="contact">
                  <div class="hover-underline-animation">Contact</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="website-1-icon8"
                    alt=""
                    src="/linkedinnav.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="website-1-icon8"
                    alt=""
                    src="/grpwebsite.png"
                  />
                </a>
              </li>

              <li>
                <a>
                  <img
                    className="website-1-icon8"
                    alt=""
                    src="/searchicon.png"
                    onClick={handleSearchIconClick} 
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {isSearchOpen && (
      <div className="search_bar_container">
        <input type="text" className="search_bar" placeholder="Search" />
        <div className="search_close" ><img
                    className="website-1-icon8"
                    alt=""
                    src="/searchicon.png"
                  /></div>
      </div>
    )}
      </div>
    </>
  );
}