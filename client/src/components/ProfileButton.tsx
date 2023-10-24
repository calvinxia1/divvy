import React, {useState} from "react";
import "../styles/ProfileButton.css"
import dara from "../img/dara.jpg"
import ListGroup from "./ListGroup";

const ProfileButton = () => {
  const [list, setList] = useState(false)

  const profile_options = ['My Profile', 'Transactions','Settings','Log Out'];

  const toggleList = () => {
    setList(!list);
    console.log(list)
  }
  const goToTheThing = () => {

  }
  return (
    <div>
      <div>
        <button
          className="profile-button" 
          onClick={toggleList}     
        >
        <img src= {dara} alt="Profile Pic" className="profile-pic"/>
        </button>
        {list && (
          <div className="list-group-container">
            <ListGroup items={profile_options} listItemType="list-group-item-profile" clickSelectItem={goToTheThing}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileButton;
