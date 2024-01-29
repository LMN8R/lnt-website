import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ThermalMarquee.css';

const cards = [
  { "image": "/thermarq_1.png", "title": "750 MW Sabiya ‐3 CCGT Power Plant , Kuwait"},
  { "image": "/thermarq_2.png", "title": "400 MW Bibiyana III CCPP, Bangladesh"},
  { "image": "/thermarq_3.png", "title": "225 MW+/‐ 10% MW Sikalbaha CCPP, Bangladesh"},
  { "image": "/dummy.jpg", "title": "360 MW Bheramara CCPP, Bangladesh"},
  { "image": "/dummy.jpg", "title": "3190 MW Qurayyah CCPP, Kingdom of Saudi Arabia"},
  { "image": "/dummy.jpg", "title": "375 MW Dhuvaran Phase III CCPP, India"},
  { "image": "/thermarq_7.png", "title": "445 MW Konaseema CCPP, India"},
  { "image": "/thermarq_8.png", "title": "370 MW Amman East CCPP, Jordan"},
  { "image": "/dummy.jpg", "title": "4000 MW Qurayyah IPP, Kingdom of Saudi Arabia"},
  { "image": "/thermarq_10.png", "title": "1x500 MW CCPP Charles Poletti at New York, USA"},
  { "image": "/dummy.jpg", "title": "2x660 MW Supercritical Power Plant In Buxar, Bihar, India"},
  { "image": "/thermarq_12.png", "title": "2x660 MW Ultra Supercritical Power Plant In Khargone, Madhya Pradesh, India"},
  { "image": "/dummy.jpg", "title": "2x660 MW Supercritical Shree Singaji Thermal Power Project (Stage-II), Malwa, Madhya Pradesh, India"},
  { "image": "/thermarq_14.png", "title": "2x660 MW Supercritical Thermal Power Project, Chhabra, Rajasthan, India"},
  { "image": "/dummy.jpg", "title": "2x150 MW Paco Power Plant, Panama, Central America"},
  { "image": "/dummy.jpg", "title": "2x660 MW Supercritical Thermal Power Project, Nellore, Andhra Pradesh, India"},
  { "image": "/thermarq_17.png", "title": "3x660 MW Supercritical Thermal Power Station Expansion Project, Koradi, Madhya Pradesh, India"},
  { "image": "/dummy.jpg", "title": "2x660 MW Jaypee Nigrie Supercritical Thermal Power Plant, Madhya Pradesh, India"},
  { "image": "/thermarq_19.jpg", "title": "2x700 MW Rajpura Coal BasedSupercritical Thermal Power Project , Punjab, India"},
];

const Article = ({ data }) => {
  const { image, title} = data;

  return (
    <figure className="snip1580">
      <img src={image} alt={title} />
      <figcaption>
        {/* <div className='lht'>{title}</div> */}
        <h3>{title}</h3>
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
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centermode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,     // Set the duration between slides in milliseconds
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 362, // Adjust the breakpoint as needed
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

const ThermalMarquee = () => {
  return (
    <div className="thermar">
      <News data={cards} />
    </div>
  );
};

export default ThermalMarquee;