import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import CardsGuid from '../Tour/CardsGuid'
function Tour() {
  return (
    <>
    <div className='tourism'>
         <div className='tourism' style={{backgroundImage:`url(images/tourism.jpg)`}}>
    <div className='tourism-box'>
        <input type='text' className='search-input' placeholder='search Country,City,...' autoComplete='false'/>
        <Button buttonStyle="btn--search--place" buttonSize="btn--large">Search</Button>
    </div>
    </div>
    </div>
    <CardsGuid/>
    </>
  )
}

export default Tour