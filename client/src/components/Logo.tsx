import React from 'react'
import "../component-styles/Logo.css"
import stressnet from "../img/stressvision.png"




const Logo = () => {
  return (
    <div>
        <img src={stressnet} alt='Logo' className='custom-logo'/>
    </div>
  )
}

export default Logo