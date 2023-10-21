import React from 'react'
import './SignUpForm.css'
import Button from '../UI/Button'
function SignUpForm() {
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <input className='text-input' type='text' placeholder='First name' autoComplete='false' required/>
            <input className='text-input' type='number' placeholder='Number' autoComplete='false' min={0} required/>
            <input className='text-input' type='email' placeholder='Email' autoComplete='false' required/>
            <Button buttonStyle="btn--tour" buttonSize="btn--large">register</Button>
        </div>
    </div>
  )
}

export default SignUpForm