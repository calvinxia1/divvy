import React, {ReactNode} from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";
import '../layout-styles/HomeLayout.css';
import Sidebar from '../components/Sidebar';
import {useUser} from "../context/UserContextProvider";
interface Props {
  children: ReactNode;
}
const HomeLayout = ({children}: Props) => {
  const {userId} = useUser();  
  const pages = ["My Divys", "Transactions", "Friend Requests"];
  return (
    <div className="div">
        <div className = "left-container">
          <div className="logo-container">
              <Logo />
          </div>
          <div className="sidebar-container">
            <Sidebar pages = {pages} onSelectItem={() => console.log(pages)}></Sidebar>
          </div>
        </div>
        <div className='body-container'>
          <div className="head-container">
            
            <div className="nav">
              
            </div>
          </div>
          <div className="feed-container"> 
            {userId && <p>Your User ID: {userId}</p>}
            {children}
          </div>
            
          
        </div>
        <div className='right-container'>
          <div className="profile">
            <ProfileButton />
          </div>
        </div>
        
        
      </div>
  )
}

export default HomeLayout