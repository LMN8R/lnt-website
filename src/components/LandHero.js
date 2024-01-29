import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./LandHero.css";

const cards = [
  { "image": "/land_hero_1.jpg", "title": "Resource Empowerment:", 
  "title_new": "Transforming Resources into Power",
  "subtitle": "Unleashing Nature's Energy Potential" },
  { "image": "/land_hero_2.png", "title": "Electrifying Vistas: ",
  "title_new": "Where Vision Meets Watts",
  "subtitle": "Lighting the Way to a Sustainable Future" },
  { "image": "/land_hero_3.png", "title": "Eco-Power Visionaries: ",
  "title_new": "Engineering a Better Tomorrow",
  "subtitle": "Sustainability in Every Solution" },
  { "image": "/land_hero_4.png", "title": "From Nature to Energy:",
  "title_new": "Engineering a Brighter Landscape",
  "subtitle": "Generating tomorrow's power Today" },
  { "image": "/land_hero_5.png", "title": "Catalytic Currents: ",
  "title_new": "Powering Beyond Imagination",
  "subtitle": "Innovate. Energize. Transform." }
];

const Article = ({ data }) => {
  const { image, title, title_new, subtitle } = data;

  return (
    <figure className="snip1585">
      <img src={image} alt={title} width={"100%"}/>
      <figcaption>
        {/* <div className='lht'>{title}</div> */}
        <lanbox></lanbox>
        <h3>{title}</h3>
        <h4>{title_new}</h4>
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
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 5000,     // Set the duration between slides in milliseconds
    pauseOnHover: false, 
    fade: true,
    cssEase: 'ease-in-out',
    speed: 1000,
  };

  return (
    <div className="ews">
      <Slider {...settings}>{newsTemplate}</Slider>
      <strong className={`ews__count ${data.length > 0 ? '' : 'none'}`}>
        {/* Total cards: {data.length} */}
      </strong>
    </div>
  );
};

const LandHero = () => {
  return (
    <div className="Wrapper">
      <News data={cards} />
    </div>
  );
};

export default LandHero;