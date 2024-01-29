import React, { useState } from "react";
import { useRef } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MANAGEMENT.css";

const MANAGEMENT = () => {
  const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  const managementData = [
    {
      name: "D M Shah",
      position: "Director",
      imageSrc: "D-M-shah.png",
      info: "Mr. Derek Michael Shah, Senior Vice President, Larsen & Toubro Limited (L&T), is Head of Green Mfg. & Development, a unit of L&T that undertakes work in the entire value chain of the green energy sector, including manufacturing of Green Energy Technological Equipment. He also spearheads the Integrated Development of projects in the Green Hydrogen and its derivatives space, that entails investment, EPC and operations of assets.Mr. Shah, a Mechanical engineer from Birla Institute of Technology, Mesra, joined L&T in 1986 as a Graduate Engineer Trainee. In the last three and half decades, he has worked in various functions in the company addressing the Industrial Project Space, and as IC Head of both MMH and Power divisions. He has been instrumental in partnering with Global Technology Leaders to secure and execute large orders, both domestic and international, in the fields of Metallurgical, Bulk Material Handling as well as Thermal Power Projects. He is also an alumnus of London Business School.  He currently chairs JV firms of L&T and Mitsubishi Power, Japan, and is also on the Board of the JV of L&T and Howden of UK",

    },
    {
      name: "Y.V.S. Sravankumar",
      position: "Director",
      imageSrc: "Y.V.S. Sravankumar.png",
      info: "Mr. Y.V.S. Sravankumar has been with Larsen & Toubro since 1995. He currently serves as Executive Vice President – Accounts & Taxation, responsible for the financial reporting of the Company/ Group’s performance, management information systems, operating a system of financial controls and management of Group taxation functions.Over the past 25 years, Mr. Sravankumar has worked at senior levels in various Corporate and Business finance functions.Mr. Sravankumar has a Bachelor’s degree in Commerce and is a Chartered Accountant, Cost Accountant and Company Secretary. He led major initiatives in taxation, accounting standards and financial control within the L&T group.",
    },
    {
      name: "Ejaz Shameem",
      position: "Director",
      imageSrc: "ejaz-Shameem.png",
      info: "Mr. Ejaz Shameem joined Sargent & Lundy (S&L) 36 years ago and has been with the company since. Mr. Shameem presently serves as the Director of the Energy Business Consulting group and has been responsible for the overall management and direction of the group’s various global engagements spanning development, planning, oversight and operations and maintenance support for all power technologies.Mr. Shameem has held roles of increasing responsibility in the design of power plants encompassing an array of power generating technologies including coal, natural gas, oil and nuclear. He spent about half of his career working on the design of new nuclear generation units, initially in the United States and later in the Republic of Korea.",
    },
    {
      name: "Robert Michael Sronce",
      position: "Director",
      imageSrc: "Robert Michael Sronce.png",
      info: "Mr. Robert Michael Sronce has been part of Sargent & Lundy for over 14 years.He is Sargent & Lundy’s Managing Director of their corporate branch office in the United Arab Emirates where his responsibilities include international project interface, business development and engaging with clients worldwide including power plant owners, developers, financiers and EPC contractors.Prior to joining the United Arabic Emirates office, Mr. Sronce worked in the Sargent & Lundy’s Energy and Industrial Group in new-generation and retrofit projects, including coal-fired, new combined-cycle, simple to combined-cycle conversion, fuel gas desulphurization and plant betterment projects.",
    },
    {
      name: "Yogendra D. Mishra",
      position: "Chief Executive",
      imageSrc: "Yogendra D. Mishra.png",
      info: "Mr. Yogendra D. Mishra brings with him over 34 years of experience in the field of power plant engineering for conventional and renewable power projects in India and abroad. His expertise lies in design, engineering, plant performance and engineering management.Before ascending to his current role as Chief Executive, Mr. Mishra served as the Chief Operating Officer of L&T-S&L. During this period, he was instrumental in establishing basic & detailed design services for environment improvement, seawater reverse osmosis (SWRO), and green energy projects.A strong believer of advantages in digitalization of tools, Mr. Mishra has skilfully navigated his team in establishing such systems and processes for enhancing the overall design experience. He believes in leveraging strengths of the individuals by providing them with challenging assignments and promotes innovation, cost optimum solutions, timely delivery etc.",
    },
    // Add other management personnel data here...

  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false); // State to track if the card is open or closed

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setIsCardOpen(true); // Open the card when clicked
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCloseButtonClick = () => {
    setIsCardOpen(false); // Close the card when the close button is clicked
  };

  return (
    <div className="management">
      {/* Navbar */}
      <Navbar />

      {/* start */}
      <div className="overview-section1">
        {/* css in overview */}
        <div className="overview-image">
          <img
            style={{ filter: "brightness(0.5)" }}
            src="/management.png"
            alt=""
            height="auto"
            width="100%"
          />

          <div className="overview-heading">
            <h1> LEADERSHIP </h1>
            {/* <h5>Powering Visions, Leading Change</h5> */}
          </div>
        </div>
      </div>

      {/* card */}
      <div className="management-card">
        <div className="management-cards">
          {managementData.map((person, index) => (
            <div className="card-D" key={index}>
              <a href={`#${index}`} onClick={() => handleCardClick(index)}>
                <img src={person.imageSrc} alt={person.name} />
                <div className="containerc">
                  <h4>
                    <b>{person.name}</b>
                  </h4>
                  <p ref={ref}>{person.position}</p>
                  <div className="container-linkdn">
                    <svg width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Display selected card info */}
      {selectedCard !== null && isCardOpen && (

        <div className="box">
          <div className="box2">
            <div className="crosslogo" onClick={handleCloseButtonClick}>
            <svg className="crosslogo1" version="1.1" viewBox="0 0 16 16" width="40" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"> <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" fill="blue"></path> <circle cx="8" cy="8" r="6.25"></circle> </svg>
          </div>
          <div className="d_m">
            {/* Display the selected card's image */}
            <div className="img-d_m">
              <img
                src={managementData[selectedCard].imageSrc}
                alt={managementData[selectedCard].name}
              />

            </div>
            {/* Common information section for all cards */}
            <div className="info-d_m">
              <div className="heading-d_m">
                <h1>{managementData[selectedCard].name}</h1>
              </div>
              <div className="line-d_m" />
              <div className="para-d_m">
                <p>
                  {/* Replace this with the corresponding info */}
                  {managementData[selectedCard].info}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

      )}



      {/* Footer */}
      <div className="foo" style={{ paddingTop: '3rem' }}>
        <Footer />
      </div>
    </div>
  );
};

export default MANAGEMENT;