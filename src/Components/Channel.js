import React from "react";
import "./Channel.css";

const Channel = ({ avatar, name, followers }) => {
  console.log(followers);
  console.log(name);
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <p>
        <span>🔴</span>
        {followers}
      </p>
    </div>
  );
};

export default Channel;
