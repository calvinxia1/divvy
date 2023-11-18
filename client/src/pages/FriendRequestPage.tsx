import React, {useState,useEffect} from 'react'
import ProfileButton from "../components/ProfileButton";
import Logo from "../components/Logo";

import {useUser} from "../context/UserContextProvider";
import HomeLayout from '../layout/HomeLayout';

import FriendRequest from '../components/FriendRequest';
const FriendRequestPage = () => {

  const userId = useUser();
  const [friendrequests,setFriendRequests] = useState([])

  useEffect(() => {
    fetch(`/${userId}/friendrequests`)
        .then((response) => response.json())
        .then((data) => setFriendRequests(data))
        .catch((error) => {
            console.error("Error getting friends requests", error);
        });
  }, [userId]);

  return (
    <HomeLayout>
    <div>
      {friendrequests.map((fr) =>(
        <FriendRequest/>
      ))}
    </div>
    </HomeLayout>
  )
}

export default FriendRequestPage