import React, {useState} from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";
import '../styles/HomePage.css';
import Sidebar from '../components/Sidebar';
import {useUser} from "../context/UserContextProvider";

const HomePage = () => {
    const {userId} = useUser();
    
    const pages = ["My Divys", "Transactions", "Notifications"];

    const [feed, setFeed] = useState(0);

    return (
      <div className="div">
        <div className = "left-container">
          <div className="logo-container">
              <Logo />
          </div>
          <div className="sidebar-container">
            <Sidebar pages = {pages} onSelectItem={() => setFeed(1)}></Sidebar>
          </div>
        </div>
        <div className='body-container'>
          <div className="head-container">
            
            <div className="nav">
              
            </div>
          </div>
          <div className="feed-container"> {userId && <p>Your User ID: {userId}</p>}</div>
            
          
        </div>
        <div className='right-container'>
            <div className="profile">
              <ProfileButton />
            </div>
        </div>
        
        
      </div>
    );
}

export default HomePage