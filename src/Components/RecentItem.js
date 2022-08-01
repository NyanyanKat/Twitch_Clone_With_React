import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="400"
        height="175"
        src={url}
        //title="Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"></img>
        <h4>{title}</h4>
        <h5>cleverprogrammer</h5>
        <h5>Science & Technology</h5>
      </div>
    </div>
  );
};

export default RecentItem;
