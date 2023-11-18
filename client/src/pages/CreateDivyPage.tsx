import React, {useState,FormEvent,useEffect} from 'react';
import {useUser} from "../context/UserContextProvider";
import { useNavigate } from 'react-router-dom';
import '../page-styles/CreateDivyPage.css';
const CreateDivyPage = () => {
    const {userId} = useUser();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);
    const [error, setError] = useState(false);
    const [friends, setFriends] = useState(["Richard","RIchard2","Richard3"]);
    /*
    useEffect(() => {
        fetch(`/${userId}/friends`)
            .then((response) => response.json())
            .then((data) => setFriends(data))
            .catch((error) => {
                console.error("Error getting friends", error);
            });
    }, [userId]);*/

    const navigate = useNavigate();
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        const divyData = {
            name: name,
            description: description,
            participants: participants,
        };
            try{
                const response = await fetch(`/${userId}/divys`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'applications/json',
                    },
                    body: JSON.stringify(divyData),
                });
                const responseData = await response.json();
                setName('');
                setDescription('');
                setParticipants([]);
                setError(false);
                navigate('/homepage/divys');

            } catch (error) {
                setError(true);
                console.error('Error creating Divy')
            }
    }   

    return (
    <div className='create-wrapper'>

        <h1>Divy</h1>
        {error && <h2>Try AGAIN</h2>}
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input 
            type='text' 
            value={name}
            onChange={(e) =>setName(e.target.value)}
            required/>
            <p>Description</p>
            <input 
            type='text' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
            <p>Participants</p>
            <select 
            multiple
            value={participants}
            onChange={(e) => setParticipants(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {friends.map((friend) =>(
                    <option key={friend} value={friend}>
                        {friend}
                    </option>
                ))}
            </select>
        <div>
            <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default CreateDivyPage