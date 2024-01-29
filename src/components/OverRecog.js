import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OverRecog.css';

const cards = [
  { "image": "/recog_1.jpg", 
  "title": "ISO-9001", 
  "subtitle": "We are ISO 9001:2015 certified company on Quality Management Systems – Requirements." },
  { "image": "/recog_2.jpg", 
  "title": "ISO-27001", 
  "subtitle": "We are ISO 27001:2013 certified company on Management System Standard - Requirements." },
  { "image": "/recog_3.jpg", 
  "title": "CII Award-2017", 
  "subtitle": "CII-BE Star Recognitions for Excellence in Customer Management" },
  { "image": "/recog_4.jpg", 
  "title": "Golden Peacock National Quality Award – 2014", 
  "subtitle": "L&T-Sargent & Lundy is a proud recipient of the prestigious ‘Golden Peacock National Quality Award – 2014’." },
  { "image": "/recog_5.jpg", 
  "title": "Be Inspired Award – 2011", 
  "subtitle": "Certificate of Achievement for “Be Inspired Award – 2011” for 3x660 MW supercritical thermal power plant in the innovation in power generation category by Bentley Systems." },
  { "image": "/recog_6.jpg", 
  "title": "EEPC Award – 2011-12", 
  "subtitle": "Regional Export Award in the category of Star Performers in Product Group for 2011-12 - Trophy for outstanding export performance during 2011-12 from Export Promotion Council of India (EEPC)." },
  { "image": "/recog_7.jpg", 
  "title": "EEPC Award – 2009 -10", 
  "subtitle": "Regional Export Award in the category of Star Performers in Product Group for 2009-10 - Trophy for your outstanding export performance during 2009-10 from Export Promotion Council of India (EEPC)." },
  { "image": "/recog_8.jpg", 
  "title": "EEPC Award – 2008 - 09", 
  "subtitle": "Regional Export Award in the category of Star Performers in Product Group for 2008-09 - Trophy for your outstanding export performance during 2008-09 from Export Promotion Council of India (EEPC)." },
  { "image": "/recog_9.jpg", 
  "title": "CFO Award -2009", 
  "subtitle": "Certificate of Appreciation for “Best Presented Subsidiary Company Accounts” for FY 2008-09 in 8th CFO Awards, conferred by Mr. Y M Deosthalee." },
  { "image": "/recog_10.jpg", 
  "title": "Golden Peacock Award – 2005", 
  "subtitle": "Golden Peacock Award: L&T-Sargent & Lundy is a proud recipient of the prestigious Golden Peacock Award for National Training for 2005." },
  { "image": "/recog_11.jpg", 
  "title": "EEPC Award – 2002-03", 
  "subtitle": "Highest Exporter's Trophy’ for outstanding engineering exports during 2002-2003 in the category 'Exports with continuous Excellence - Non-SSI." },
  { "image": "/recog_12.jpg", 
  "title": "EEPC Award – 2014-15", 
  "subtitle": "Regional Export Award in the category of Star Performers – Engineering Services for 2014-15 - Trophy for outstanding export performance during 2014-15 from Export Promotion Council of India (EEPC)." }
];

const Article = ({ data }) => {
  const { image, title, subtitle } = data;

  return (
    <div className='snip_recon'>
    <figure className="snip_recog">
      
      <recog_text>
        <div className='recog_ima'><img src={image} alt={title} /></div>
        {/* <div className='lht'>{title}</div> */}
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </recog_text>
      <a href="#"></a>
    </figure>
    </div>
  );
};

const News = ({ data }) => {
  const newsTemplate = data.length > 0 ? (
    data.map((item, index) => (
      <div key={index}>
        <Article data={item} />
      </div>
    ))
  ) : (
    <p>Please add some cards</p>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 6000,     // Set the duration between slides in milliseconds
    pauseOnHover: true, 
    speed: 3000
    // responsive: [
    //   {
    //     breakpoint: 1340, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 3, // Number of slides to show on larger screens
    //     },
    //   },
    //   {
    //     breakpoint: 1660, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 4, // Number of slides to show on larger screens
    //     },
    //   },
    //   {
    //     breakpoint: 1024, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 2, // Number of slides to show on larger screens
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Adjust the breakpoint as needed
    //     settings: {
    //       slidesToShow: 1, // Number of slides to show on smaller screens
    //     },
    //   },
    // ],
  };

  return (
    <div className="news">
      <Slider {...settings}>{newsTemplate}</Slider>
      <strong className={`news__count ${data.length > 0 ? '' : 'none'}`}>
        {/* Total cards: {data.length} */}
      </strong>
    </div>
  );
};

const OverRecog = () => {
  return (
    <div className='recog_pad'>
    <div className="recog_contain">
      <div className='recog_flow'>
      <News data={cards} />
      </div>
    </div>
    </div>
  );
};

export default OverRecog;