import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailEngCard from "../components/DetailEngCard";
import "./OVERVIEW.css";
import "./detail-engineering.css";

function Detail() {
  return (
    <div className="detaileng">
      <Navbar />
      <div className="overview-section1">
        <div className="overview-image">
          <img
            style={{ filter: "brightness(0.5)" }}
            src="/detaileng.png"
            alt=""
            height="auto"
            width="100%"
          />

          <div className="overview-heading">
            <h1> BASIC / DETAIL ENGINEERING </h1>
          </div>
        </div>
      </div>

      <div className="detailengsection2">
        <img src="detaileng2.png" className="firstimg" />
        <div className="textcontainer">
          <p className="textcontent">
            India's renewable power sector is undergoing swift growth, propelled
            by government ambitions and growing environmental consciousness.
            India possesses a varied renewable energy portfolio, encompassing
            solar, wind, hydro, and biomass sources.
          </p>
          <p className="textcontent">
            India's renewable power sector is undergoing swift growth, propelled
            by government ambitions and growing environmental consciousness.
            India possesses a varied renewable energy portfolio, encompassing
            solar, wind, hydro, and biomass sources. At L&T-S&L, our experts
            hold a track record in designing and engineering multi-GW renewable
            energy projects globally. Our precise project design prioritizes
            on-time and budget delivery, while also optimizing energy generation
            and minimizing expenses. Whether it's brownfield or greenfield
            projects, L&T-S&L's demonstrated proficiency and cost-effective
            solutions make us the reliable choice for comprehensive engineering
            services in the sector.
          </p>
        </div>
      </div>

      <div className="detailengsection3">
        <DetailEngCard
          title="Pre-bid Engineering"
          content="The pre-bid engineering service includes preparation of plant design basis, preparation of pre-bid technical queries, preparation of preliminary plot plan and GA for main plant and Balance of plant"
        />
        <DetailEngCard
          title="Pre-bid Engineering"
          content="The pre-bid engineering service includes preparation of plant design basis, preparation of pre-bid technical queries, preparation of preliminary plot plan and GA for main plant and Balance of plant"
        />
        <DetailEngCard
          title="Pre-bid Engineering"
          content="The pre-bid engineering service includes preparation of plant design basis, preparation of pre-bid technical queries, preparation of preliminary plot plan and GA for main plant and Balance of plant"
        />
        <DetailEngCard
          title="Pre-bid Engineering"
          content="The pre-bid engineering service includes preparation of plant design basis, preparation of pre-bid technical queries, preparation of preliminary plot plan and GA for main plant and Balance of plant"
        />
      </div>
      <div className="detailengsection4">
        <img src="./detaileng3.png" className="image3" />
        <div className="subsection4">
          <h4 className="basictitle">Basic Engineering</h4>
          <p className="basiccontent">
            The pre-bid engineering service includes preparation of plant design
            basis, preparation of pre-bid technical queries, preparation of
            preliminary plot plan and GA for main plant and Balance of plant.
          </p>
          <div className="iconlist">
            <div className="icontext">
              <img src="detailicon1.png" className="detailicon" />
              <p className="basiccontent">
                The pre-bid engineering service design basis
              </p>
            </div>
            <div className="icontext">
              <img src="detailicon2.png" className="detailicon" />
              <p className="basiccontent">
                The pre-bid engineering service design basis
              </p>
            </div>
            <div className="icontext">
              <img src="detailicon3.png" className="detailicon" />
              <p className="basiccontent">
                The pre-bid engineering service design basis
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
