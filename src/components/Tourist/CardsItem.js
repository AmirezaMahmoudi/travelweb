 import React from 'react'
import './CardsGuid.css'
 function CardsItem(props) {
    const {src , title , text} = props
   return (
     <li className='cards__item'>
        <div className='compare-item'>
            <div className='compare-image-list'>
                <img src={src}></img>
                <div className='compere-item-title'>{title}</div>
                <div className='compere-item-exp'>{text}</div>
            </div>
        </div>
     </li>
   )
 }

 export default CardsItem