import React from "react";
import {Avatar} from '@material-ui/core'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      {/* header__left*3 */}
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"
        />

        <h2>Following</h2>
        <h2>Browse</h2>

        {/* <div className="header__verticalLine"></div> */}

        {/* <h2>Esports</h2>
        <h2>Music</h2> */}
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div className="header__center">
        <input
          type="text"
          placeholder="Search"
          pattern="^[a-zA-Z0-9_]{1,25}$"
        />
        <div className="header__centerLogoContainer">
          <i class="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Get Bits</h4>
          </div>

          <Avatar className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
