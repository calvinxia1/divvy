import React from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";
import Profile from "../components/Profile";
import '../styles/HomePage.css';
const HomePage = () => {
    const id = 0;

    return (
      <div className="div">
        <div className="head-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav"></div>
          <div className="profile">
            <ProfileButton />
          </div>
        </div>
        <div className="body-container">
          <Profile id={id}/>
          <div className="sidebar-container"></div>
          <div className="feed-container"></div>
        </div>
        <div className="footer-container"></div>
      </div>
    );
}

export default HomePage