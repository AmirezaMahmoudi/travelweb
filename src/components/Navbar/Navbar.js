import React ,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    const [menuState , setMenuState] = useState(false)
    const menuHandler = () => setMenuState(!menuState)
    const mobileHandler = () => setMenuState(false)
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Travel <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={menuHandler}>
                    <i className={menuState ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
            <ul className={menuState ? 'nav-menu active' : 'nav-menu' }>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={mobileHandler}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={mobileHandler}>
                        Toursim
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={mobileHandler}>
                        Tour
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links-mobile" onClick={mobileHandler}>
                        Sign Up
                    </Link>
                </li>
            </ul>

        </nav>

    )
}
export default Navbar;