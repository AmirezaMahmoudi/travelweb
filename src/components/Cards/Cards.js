import React from 'react'
import './Cards.css'
import CardItems from './CardItems'
function Cards() {
  return (
    <div className='cards'>
        <h1>Top destinations</h1>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__item'>
            <CardItems
                            src="images/9.jpg"
                            text=" Amazoon"
                            label="Unchrarted"
                            path="/"
                 />
             <CardItems
                            src="images/9.jpg"
                            text=" Amazoon"
                            label="Unchrarted"
                            path="/"
                 />
            </ul>
            <ul className='cards__item'>
            <CardItems
                            src="images/9.jpg"
                            text=" Amazoon"
                            label="Unchrarted"
                            path="/"
                 />
             <CardItems
                            src="images/9.jpg"
                            text=" Amazoon"
                            label="Unchrarted"
                            path="/"
                 />
             <CardItems
                            src="images/9.jpg"
                            text=" Amazoon"
                            label="Unchrarted"
                            path="/"
                 />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards