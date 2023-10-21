import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import CardsGuid from '../Tourist/CardsGuid'
import Cards from '../Cards/Cards.js'
function Tourism() {
  return (
    <>
    <div className='tourism' style={{backgroundImage:`url(images/tourism.jpg)`}}>
    <h1 style={{color:'#fff',fontSize:'46px'}}>Travel And Tourism</h1>
    <p>Travel And Tourism</p>
    <div className='tourism-box'>
        <input type='text' className='search-input' placeholder='search Country,City,...' autoComplete='false'/>
        <Button buttonStyle="btn--search--place" buttonSize="btn--large">Search</Button>
    </div>
    </div>
        <CardsGuid />
        <Cards />
    </>
    )
}

export default Tourism