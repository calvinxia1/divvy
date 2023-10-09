import React from "react";
import "../styles/ProfileButton.css"
import dara from "../img/dara.jpg"

const ProfileButton = () => {
  return (
    <div>
      <div>
        <button
          className="profile-button"          
        >
        <img src= {dara} alt="Profile Pic" className="profile-pic"/>
        </button>
      </div>
    </div>
  );
};

export default ProfileButton;
