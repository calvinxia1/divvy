import React, {useState,useEffect} from 'react'
import {useUser} from "../context/UserContextProvider";
import HomeLayout from '../layout/HomeLayout';
import Divy from '../components/Divy';
const DivyPage = () => {
  const {userId} = useUser();
  const [divylist, setList] = useState([]);


  useEffect(() => {
    fetch(`/${userId}/divys`) // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, [userId]);
  return (
    <HomeLayout>
      <div><h1>{userId}</h1></div>
      <div className='feed'>
        {divylist.length === 0 && <p>No Divys</p>}
        {divylist.map((divyId)=>(
          <Divy key={divyId} divyId = {divyId}/>
        ))
        }
        <div className='divy-list'>
          
        </div>  
      
      </div>
    </HomeLayout>
  )
};

export default DivyPage;