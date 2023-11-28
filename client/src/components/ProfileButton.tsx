import React, {useState, useEffect,useRef} from "react";
import "../component-styles/ProfileButton.css"
import dara from "../img/dara.jpg" 
import ProfileOptions from "./ProfileOptions";

const ProfileButton = () => {
  const [list, setList] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const profile_options = ['My Profile','Settings','LogOut'];

  const toggleList = () => {
    setList(!list);
  }
  const goToTheThing = () => {

  }
  const handleClickOutside = (event:MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div>
        <button
          className="profile-button" 
          onClick={toggleList}     
        >
        <img src= {dara} alt="Profile Pic" className="profile-pic"/>
        </button>
        <div className="list-group-container">
        {list && (
          
            <ProfileOptions items={profile_options} clickSelectItem={goToTheThing}/>
          
        )}
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
