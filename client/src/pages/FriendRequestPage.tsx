import React, {useState} from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";

import {useUser} from "../context/UserContextProvider";
import HomeLayout from '../layout/HomeLayout';


const FriendRequestPage = () => {

    const userID = useUser();
  return (
    <HomeLayout><p>Friend page</p></HomeLayout>
  )
}

export default FriendRequestPage