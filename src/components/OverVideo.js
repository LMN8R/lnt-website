import React from "react";
import PropTypes from "prop-types";

const OverVideo = ({ embedId }) => (
  <div className="video-responsive">
    <div style={{ paddingBottom: "56.25%", position: "relative", height: 0 }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  </div>
);

OverVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default OverVideo;
