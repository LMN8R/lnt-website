import React, { useEffect } from "react";
import "./OverMW.css";

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

const OverMW = () => {
  useEffect(() => {
    const cleanup1 = observeAnimatedClass("digits-first");
    const cleanup2 = observeAnimatedClass("animated");
    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);
  return (
    <div className="overmw_container">
      
      <div className="years_section">
        <div className="years_1">
          <div class="text text3">
            <b className="overmw_num">
              <span>
                {" "}
                <div id="counter" class="animated">
                  <ul class="digits digits-first ">
                    {" "}
                    <li>28,547</li> <li> 15,981</li> <li> 22,046 </li>
                    <li> 13,561</li> <li> 00,050 </li>
                    <li> 13,685 </li>
                    <li> 25,400 </li>
                    <li> 28,568 </li>
                    <li> 12.384 </li>
                    <li>
                    30,731
                      {/* <span className="span6">+</span> */}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </span>
              <div className="over_smol">&nbsp;MW</div>
            </b>
          </div>
          <div className="years_desc">Gas based Power 
Projects Experience</div>
        </div>
      </div>
<div className="overmw_bl1" />
<div className="overmw_bl2" />
<div className="overmw_bl3" />



<div className="years_section">
        <div className="years_1">
          <div class="text text3">
            <b className="overmw_num">
              <span>
                {" "}
                <div id="counter" class="animated">
                  <ul class="digits digits-first ">
                    {" "}
                    <li>28,547</li> <li> 15,981</li> <li> 22,046 </li>
                    <li> 13,561</li> <li> 00,050 </li>
                    <li> 13,685 </li>
                    <li> 25,400 </li>
                    <li> 28,568 </li>
                    <li> 12.384 </li>
                    <li>
                      32,730
                      {/* <span className="span6">+</span> */}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </span>
              <div className="over_smol">&nbsp;MW</div>
            </b>
          </div>
          <div className="years_desc">Coal based Power Projects Experience</div>
        </div>
      </div>

<div className="years_section">
        <div className="years_1">
          <div class="text text3">
            <b className="overmw_num">
              <span>
                {" "}
                <div id="counter" class="animated">
                  <ul class="digits digits-first ">
                    {" "}
                    <li>28,547</li> <li> 15,981</li> <li> 22,046 </li>
                    <li> 13,561</li> <li> 00,050 </li>
                    <li> 13,685 </li>
                    <li> 25,400 </li>
                    <li> 28,568 </li>
                    <li> 12.384 </li>
                    <li>
                      12,750
                      {/* <span className="span6">+</span> */}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </span>
              <div className="over_smol">&nbsp;MW</div>
            </b>
          </div>
          <div className="years_desc">Wind Power Projects Experience</div>
        </div>
      </div>


      <div className="years_section">
        <div className="years_4">
          <b className="overmw_num">
            <div id="counter" class="animated">
              <ul class="digits digits-first ">
                {" "}
                <li>15,500</li>
                <li>82,015</li>
                <li>20,435</li>
                <li>86,345</li> 
                <li>05,600</li>
                <li>85,456</li>
                <li>57,425</li>
                <li>51,877</li>
                <li>15.840</li>
                <li>
                  16,825
                </li>{" "}
              </ul>
            </div>
            <div className="over_smol">&nbsp;MW</div>
          </b>
          <div className="years_desc">Solar Power Projects Experience</div>
        </div>
      </div>
    </div>
  );
};

export default OverMW;