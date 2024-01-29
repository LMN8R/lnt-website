import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Landingslide.css';

const cards = [
  { "image": "/basic_landslide.png", "title": "BASIC/DETAIL ENGINEERING", "subtitle": "Solutions encompassing pre-bid, basic & detailed engineering and on-site engineering support" },
  { "image": "/owner_landslide.png", "title": "OWNER'S ENGINEERING", "subtitle": "Managing engineering from concept to commission for Developers, Owners and IPP" },
  { "image": "/lenders_landslide.png", "title": "LENDER'S ENGINEERING", "subtitle": "Engineering Services for Global & National Financial Institutions, Govt. entities & Private Equity" },
  { "image": "/pmc_landslide.png", "title": "PMC", "subtitle": "Array of services for Construction management, Field Engineering, Start-up & Commissioning Services" },
  { "image": "/rnm_landslide.png", "title": "R&M", "subtitle": "Economical engineering solutions for enhanced performance of Power Projects" },
  { "image": "/special_landslide.png", "title": "SPECIAL ENGINEERING", "subtitle": "Specialized Consulting Services tailored to cater to the requirements of Developers, Financers & Investors" }
];

const Article = ({ data }) => {
  const { image, title, subtitle } = data;

  return (
    <figure className="snip1584">
      <img src={image} alt={title} />
      <figcaption>
        {/* <div className='lht'>{title}</div> */}
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </figcaption>
      <a href="#"></a>
    </figure>
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 3000,     // Set the duration between slides in milliseconds
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1340, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of slides to show on larger screens
        },
      },
      {
        breakpoint: 1660, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 4, // Number of slides to show on larger screens
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of slides to show on larger screens
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller screens
        },
      },
    ],
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

const Landingslide = () => {
  return (
    <div className="app">
      <News data={cards} />
    </div>
  );
};

export default Landingslide;