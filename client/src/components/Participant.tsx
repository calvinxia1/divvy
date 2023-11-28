import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import '../component-styles/Participant.css';
interface Props {
    name:string;
}

const Participant = ({name}:Props) => {
  return (
    <div className='participant'>
        <p>{name}</p>
        <button type='button'>
            <TiDeleteOutline/>
        </button>
    </div>
  )
}

export default Participant