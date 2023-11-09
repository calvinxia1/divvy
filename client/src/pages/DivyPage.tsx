import React, {useState} from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";
import '../styles/HomePage.css';
import {useUser} from "../context/UserContextProvider";
import HomeLayout from '../layout/HomeLayout';

const DivyPage = () => {
    const {userId} = useUser();  
    return (
      <HomeLayout>
        <h1>hi</h1>
      </HomeLayout>
    );
}

export default DivyPage