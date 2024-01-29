import "./ButtonList.css";
import React, { useState } from "react";

function ButtonList() {
  const [activeButton, setActiveButton] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const buttons = [
    "ISO-9001",
    "ISO-27001",
    "CII Award-2017",
    "Golden Peacock National Quality Award – 2014",
    "Be Inspired Award – 2011",
    "EEPC Award – 2011-12",
    "EEPC Award – 2009 -10",
    "EEPC Award – 2008 - 09",
    "CFO Award -2009",
    "Golden Peacock Award – 2005",
    "EEPC Award – 2002-03",
    "EEPC Award – 2014-15",
  ];
  const contents = [
    {
      title:
        "We are ISO 9001:2015 certified company on Quality Management Systems – Requirements.",
      imageSrc: "/recog_1.jpg",
    },
    {
      title:
        "We are ISO 27001:2013 certified company on Management System Standard - Requirements.",
      imageSrc: "/recog_2.jpg",
    },
    {
      title: "CII-BE Star Recognitions for Excellence in Customer Management",
      imageSrc: "/recog_3.jpg",
    },
    {
      title:
        "L&T-Sargent & Lundy is a proud recipient of the prestigious ‘Golden Peacock National Quality Award – 2014’.",
      imageSrc: "/recog_4.jpg",
    },
    {
      title:
        "Certificate of Achievement for “Be Inspired Award – 2011” for 3x660 MW supercritical thermal power plant in the innovation in power generation category by Bentley Systems.",
      imageSrc: "/recog_5.jpg",
    },
    {
      title:
        "Regional Export Award in the category of Star Performers in Product Group for 2011-12 - Trophy for outstanding export performance during 2011-12 from Export Promotion Council of India (EEPC).",
      imageSrc: "/recog_6.jpg",
    },
    {
      title:
        "Regional Export Award in the category of Star Performers in Product Group for 2009-10 - Trophy for your outstanding export performance during 2009-10 from Export Promotion Council of India (EEPC).",
      imageSrc: "/recog_7.jpg",
    },
    {
      title:
        "Regional Export Award in the category of Star Performers in Product Group for 2008-09 - Trophy for your outstanding export performance during 2008-09 from Export Promotion Council of India (EEPC).",
      imageSrc: "/recog_8.jpg",
    },
    {
      title:
        "Certificate of Appreciation for “Best Presented Subsidiary Company Accounts” for FY 2008-09 in 8th CFO Awards, conferred by Mr. Y M Deosthalee.",
      imageSrc: "/recog_9.jpg",
    },
    {
      title:
        "Golden Peacock Award: L&T-Sargent & Lundy is a proud recipient of the prestigious Golden Peacock Award for National Training for 2005.",
      imageSrc: "/recog_10.jpg",
    },
    {
      title:
        "Highest Exporter's Trophy’ for outstanding engineering exports during 2002-2003 in the category 'Exports with continuous Excellence - Non-SSI.",
      imageSrc: "/recog_11.jpg",
    },
    {
      title:
        "Regional Export Award in the category of Star Performers – Engineering Services for 2014-15 - Trophy for outstanding export performance during 2014-15 from Export Promotion Council of India (EEPC).",
      imageSrc: "/recog_12.jpg",
    },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const scrollLeft = () => {
    setScrollOffset((prevOffset) =>
      prevOffset === 0 ? buttons.length - 4 : prevOffset - 4
    );
  };

  const scrollRight = () => {
    setScrollOffset((prevOffset) =>
      prevOffset === buttons.length - 4 ? 0 : prevOffset + 4
    );
  };

  return (
    <div className="button-container">
      <div className="button-wrap"><button className="scroll-buttons" onClick={scrollLeft} style={{rotate: '180deg'}}></button>
        {buttons.slice(scrollOffset, scrollOffset + 4).map((button, index) => (
          <a
            href="javascript:void(0)"
            key={index}
            className={`button ${
              index + scrollOffset === activeButton ? "active" : ""
            }`}
            onClick={() => handleButtonClick(index + scrollOffset)}
          >
            {button}
          </a>
        ))} <button className="scroll-buttons" onClick={scrollRight}></button>
      </div>

      <div className="content">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`content-${index + 1} ${
              index === activeButton ? "active" : ""
            }`}
          >
            <div className="over_card">
              <div className="recog_content">
                <p>{content.title}</p>
                <img src={content.imageSrc} alt={`Image ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
