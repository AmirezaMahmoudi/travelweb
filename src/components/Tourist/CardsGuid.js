import React from 'react'
import CardsItem from './CardsItem'
function CardsGuid() {
  return (
    <div className='cards'>
        <h1>Best Tour guide </h1>
        <p style={{textAlign:'center'}}>lorem </p>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='card__item'>
                     <CardsItem src="https://cdn.hamgardi.com/Static/Img/internal/compare.png" title="lorem"  text="lorem ipsum alan"/>
                     <CardsItem src="https://cdn.hamgardi.com/Static/Img/internal/compare.png" title="lorem"  text="lorem ipsum alan"/>
                     <CardsItem src="https://cdn.hamgardi.com/Static/Img/internal/compare.png" title="lorem"  text="lorem ipsum alan"/>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardsGuid