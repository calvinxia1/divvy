import React from 'react'
import "../styles/Logo.css"
import stressnet from "../img/stressnet.png"




const Logo = () => {
  return (
    <div>
        <img src={stressnet} alt='Logo' className='custom-logo'/>
    </div>
  )
}

export default Logo