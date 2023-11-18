import React,{useState, useEffect} from 'react'
import {useUser} from "../context/UserContextProvider";
interface Props {
  divyId: number;
}
export interface DivyProps {
  name: string,
  description: string,
  participants: [],
  expenses: [],
  total: number
}
const Divy = ({divyId}:Props) => {
  const {userId} = useUser();
  const [down, setDown] = useState(false);
  const [data,setData] = useState<DivyProps>({
    name: "",
    description:"",
    participants: [],
    expenses:[],
    total: 0
  });

  const toggleDivy = () => {
    setDown(!down);
  }
  
  useEffect(() => {
    fetch(`/divys/${divyId}`) // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching divy data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, [divyId]);
  return (
    <div className='divy'>
      

      <h1>{data.name}</h1>
      {down && (
        <p>down</p>
      )
      }
    </div>
  )
}

export default Divy