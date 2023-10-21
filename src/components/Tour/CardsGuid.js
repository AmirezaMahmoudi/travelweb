import React from 'react'
import { Link } from 'react-router-dom'
import './CardsGuid.css'
import Button from '../UI/Button'
function CardsGuid() {
  return (
    <>
        <div className='container'>
          <div className='tour__tabs'>
            <div className='tour__wrapper'>
              <ul className='nav-tabs'>
              <li>
                        <Link to='/' className='anchor'>
                            <h5> All Tours</h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                            <h5> Forgein Tours </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          Domestic Tours
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                         One Day tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Adventure Time
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Luxrious Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Offers
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                         aha tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          huh Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                         Safari
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          Inside
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          Outside
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          kids
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Historical
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                          Hiking
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        one more tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        another tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                         Holiday Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Special Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                         Sth Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        World Tour
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Travel
                        </h5>
                        </Link>
                        </li>
                        <li>
                        <Link to='/' className='anchor'>
                        <h5>
                        Desert Tour
                        </h5>
                        </Link>
                        </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='tour__tabs'>
          <div className='tab-content'>
            <div className='tab-pane'>
              <header className='tab-header'>
                <div className='tab-text'>Tour
                </div>
                <div className='tab-sort-filter tab-text'>
                  Sorted by
                  <span className='selectTours'>
                    <select className='tab-sort-input'>
                      <option value='newst'>Newst</option>
                      <option value='cheapest'>Cheapest</option>
                      <option value='viewCount'>Most Viewed</option>
                    </select>
                  </span>
                </div>
              </header>
              <div className='tabs-content'>
                <ul>
                  <li>
                    <Link to='/' className='anchor'>
                      <span>Europe Tour</span>
                      <p>2.300$</p>
                      <p>4 weeks</p>
                      <p>Qatar Airways</p>
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='anchor'>
                      <span>Asia Tour</span>
                      <p>2.300$</p>
                      <p>4 weeks</p>
                      <p>Qatar Airways</p>
                    </Link>
                  </li>
                </ul>
                <div className='more-tour-buttons'>
                  <Button buttonStyle="btn--tour" buttonSize="btn--large">More Tours</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardsGuid