import React ,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import './Navbar.css'
function Navbar(){
    const [menuState , setMenuState] = useState(false)
    const [buttonState,setButtonState] = useState(true)
    const menuHandler = () => setMenuState(!menuState)
    const mobileHandler = () => setMenuState(false)
    useEffect(()=>{
        showButton();
    },[])
    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
    }
    window.addEventListener('resize',showButton)
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
                    <Link to="/tourism" className="nav-links" onClick={mobileHandler}>
                        Toursim
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tour" className="nav-links" onClick={mobileHandler}>
                        Tour
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={mobileHandler}>
                        Sign Up
                    </Link>
                </li>
            </ul>
                {   buttonState?
                        <Button buttonStyle={'btn--outline'} to="/sign-up">Sign Up</Button>:null
                }
        </nav>

    )
}
export default Navbar;