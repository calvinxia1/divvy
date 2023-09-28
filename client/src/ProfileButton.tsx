import React from "react";
import "./styles/ProfileButton.css"
import dara from "./img/dara.jpg"

const ProfileButton = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="profile-button"
          type="button"
          id="book-dropdown"
          data-bs-toggle="dropdown"

        >
        <img src= {dara} alt="Profile Pic" className="profile-pic"/>
        </button>

        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="book-dropdown">
    
          <li>
            <a className="dropdown-item" href="#">
              How's it going?
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              You getting a lot of work done?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileButton;
