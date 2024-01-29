import React from "react";
import "./DetailEngCard.css";

function DetailEngCard(props) {
  return (
    <div className="detailengcard">
      <img src="/detailengworker.png" className="workerimage" />
      <div className="overlay" />
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
    </div>
  );
}

export default DetailEngCard;
