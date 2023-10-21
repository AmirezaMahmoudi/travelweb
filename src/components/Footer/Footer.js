import React from 'react'
import './Footer.css'
import Button from '../UI/Button.js'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter to get the latest updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
              <input className='footer-input' type='email' placeholder='Enter your email' />
              <Button buttonStyle='btn--special' >Sign Up</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to='/'>Career oprtunities</Link>
            <Link to="/">Contact Us</Link>
            <Link to='/'>Job offers </Link>
          </div>
          <div class="footer-link-items">
            <h2>Guide</h2>
            <Link to='/'>FAQ</Link>
            <Link to="/">Website guide</Link>
            <Link to='/'>Privacy </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class="footer-link-items">
            <h2>Buy Tickets</h2>
            <Link to='/'>Buy Plane Tickets</Link>
            <Link to="/">Buy Train Tickets</Link>
            <Link to='/'>Buy Bus Tickets</Link>
          </div>
          <div class="footer-link-items">
            <h2 style={{fontSize:'20px'}}>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to="/">X</Link>
            <Link to='/'>LinkedIn </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
               Travel <i className='fab fa-typo3'></i>
              </Link>
          </div>
          <small className='website-rights'>
            Travel © 2023
          </small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className='social-icon-link Instagram' to='/'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link X' to='/'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link className='social-icon-link linkedin' to='/'>
              <i className='fab fa-linkedin'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer