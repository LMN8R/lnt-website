import React, { useEffect } from "react";
import "./YearsFormContainer.css";

const observeAnimatedClass = (className) => {
  const elements = document.querySelectorAll(`.${className}`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("luckie");
        } else {
          entry.target.classList.remove("luckie");
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

const YearsFormContainer = () => {
  useEffect(() => {
    const cleanup1 = observeAnimatedClass("digits-first");
    const cleanup2 = observeAnimatedClass("animated");
    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);
  return (
    <div className="years_container">
      
      <div className="years_section">
        <div className="years_1">
          <div class="text text3">
            <b className="overmw_num">
              <span>
                {" "}
                <div id="counter" class="animated">
                  <ul class="digits digits-first ">
                    {" "}
                    <li>28</li> <li> 15</li> <li> 22 </li>
                    <li> 13</li> <li> 00 </li>
                    <li> 13 </li>
                    <li> 25 </li>
                    <li> 28 </li>
                    <li> 84 </li>
                    <li>
                      28
                      {/* <span className="span6">+</span> */}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </span>
              <div className="smol">&nbsp;Years</div>
            </b>
          </div>
          <div className="years_desc">of Engineering Excellence</div>
        </div>

        <div className="vl_years"></div>
      </div>
      <div className="years_section">
        <div className="years_2">
          <b className="overmw_num">
            <div id="counter" class="animated">
              <ul class="digits digits-first ">
                {" "}
                <li>1,000</li>
                <li>0,015</li>
                <li>2,435</li>
                <li>9,345</li> 
                <li>5,600</li>
                <li>1,456</li>
                <li>3,425</li>
                <li>2,877</li>
                <li>7.840</li>
                <li>
                  2,800<span className="span6">+</span>
                </li>{" "}
              </ul>
            </div>
          </b>
          <div className="years_desc">Project Across 30+ Countries</div>
        </div>
        <div className="vl_years"></div>
      </div>

      <div className="years_section">
        <div className="years_3">
          <b className="overmw_num">
            <div id="counter" class="animated">
              <ul class="digits digits-first ">
                {" "}
                <li> 1,600</li> 
                <li> 2,415</li> 
                <li> 5,422 </li>
                <li> 1,413</li> 
                <li> 3,400 </li>
                <li> 5,413 </li>
                <li> 4,425 </li>
                <li> 9,427 </li>
                <li> 1.484 </li>
                <li>
                  {" "}
                  1,600
                  <span className="span6">+</span>
                </li>{" "}
              </ul>
            </div>
            <div className="smol">Cr.</div>
          </b>
          <div className="years_desc">INR Worth of Projects Being Managed</div>
        </div>{" "}
        <div className="vl_years"></div>
      </div>

      <div className="years_section">
        <div className="years_4">
          <b className="overmw_num">
            <div id="counter" class="animated">
              <ul class="digits digits-first ">
                {" "}
                <li>500</li>
                <li>015</li>
                <li>435</li>
                <li>345</li> <li>600</li>
                <li>456</li>
                <li>425</li>
                <li>877</li>
                <li>840</li>
                <li>
                  450<span className="span6">+</span>
                </li>{" "}
              </ul>
            </div>
            {/* <span className="span6">+</span> */}
          </b>
          <div className="years_desc">Employees</div>
        </div>
      </div>
    </div>
  );
};

export default YearsFormContainer;