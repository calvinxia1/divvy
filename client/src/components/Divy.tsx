import React,{useState, useEffect} from 'react'
interface DivyProps {
  id: number;
  name: string;
  payer: number;
  participants: number[];
  amount: number;

}
const Divy = () => {
  const [userId, setUserId] = useState("");
  const [data,setData] = useState<DivyProps>({
    id: 0,
    name: "",
    payer: 0,
    participants: [],
    amount: 0,
  });
  useEffect(() => {
    fetch("") // Use the correct URL path use back tick when using variables in path
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error here, e.g., display an error message to the user
      });
  }, []);
  return (
    <div>

    </div>
  )
}

export default Divy