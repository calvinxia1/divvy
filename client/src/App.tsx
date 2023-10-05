import React, { useState, useEffect } from "react";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import Profile from "./components/Profile";
import "./App.css";
function App() {
  const username = "ihavenoidea"

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
        <Profile username={username}/>
        <div className="sidebar-container"></div>
        <div className="feed-container"></div>
      </div>
      <div className="footer-container"></div>
    </div>
  );
}

export default App;
