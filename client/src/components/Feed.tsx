import React, {useState,useEffect} from 'react'
interface Props {
  userId: number;
}
interface DivyProps {
  id: number;
  name: string;
  description: string
}
const Feed = ({userId}: Props) => {
  const [data,setData] = useState<DivyProps>({
    id: 0,
    name: "",
    description:""
  });
  const[feed, setFeed] = useState(0);
  useEffect(() => {
    fetch(`/divys/${userId}`) // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, [userId]);
  return (
    <div className='feed'>
      {feed == 0 &&
      <div className='divy-list'>
        
      </div>}

    </div>
  )
};

export default Feed;