import React from 'react'
import Button from '../UI/Button'
import './Herosection.css'
function Herosection() {
  return (
    <div className='hero-container'>
      <video src='' autoPlay loop muted></video>
      <div className='hero-buttons'>
      <input className='search-input' type='text' placeholder='Search City,Country,...' autoComplete='false'/>
      <Button buttonStyle='btn--search' buttonSize='btn--medium'>
        Search
      </Button>
      </div>
    </div>
  )
}

export default Herosection