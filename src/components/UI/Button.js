import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
function Button(props) {
   const [buttonState , setButtonState] = useState(true)
const {children,to,buttonStyle,buttonSize} = props
const STYLES = ['btn--primary','btn--outline','btn--special','btn--search','btn--tour','btn--search--place']
const SIZES = ['btn--medium','btn--large']
const ButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
const ButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  return (
    <Link to={to} className='btn-mobile'>
    <button className={`btn ${ButtonStyle} ${ButtonSize}`}>
        {children}

    </button>
    </Link>
  )
}

export default Button