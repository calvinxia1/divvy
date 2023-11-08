import React, {useState,useEffect} from 'react'
interface Props {
  userId: number;
}

const Feed = ({userId}: Props) => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`/profile/${userId}`) // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, [userId]);
  return (
    <div className='feed'>
      
      <div className='feed-list'>
        
      </div>

    </div>
  )
};

export default Feed;