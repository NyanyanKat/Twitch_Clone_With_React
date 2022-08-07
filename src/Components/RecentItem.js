import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <div className="video">
        <iframe
          // width="400"
          // height="175"
          src={url}
          //title="Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="item__details">
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"></img>
        <h4>{title}</h4>

        <p>cleverprogrammer</p>

        <p>Science & Technology</p>
      </div>
    </div>
  );
};

export default RecentItem;
