import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__topLeft">
          <img src="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg"></img>
          <div className="profile__topLeftDetails">
            <h1>cleverprogrammer</h1>
            <h1>1k followers</h1>
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url="https://www.youtube.com/embed/ktjafK4SgWM"
            title="Learn MERN Stack"
          />

          <RecentItem
            url="https://www.youtube.com/embed/l4QWfEKV0K8"
            title="Roadmap to becoming a Frontend Developer in under 90 Days 🚀"
          ></RecentItem>

          <RecentItem
            url="https://www.youtube.com/embed/NrVf8XEihCA"
            title="Frontend Developer Guide for 2022"
          ></RecentItem>
        </div>
        <div className="profile__categories">
          <h2>cleverprogrammer's recently streamed Categories</h2>
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" />
          <h3>Science & Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
