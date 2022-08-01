import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg"
          name="cleverprogrammer"
          followers="1k"
        />
        <Channel
          avatar="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg"
          name="PinyBoy"
          followers="100k"
        />
        <br />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422_1280.jpg"
          name="peegutv"
          followers="2"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
          <div className="sidebar__bottomContainer">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search to Add Friends" />
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
