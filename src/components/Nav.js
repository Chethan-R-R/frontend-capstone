import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

export default function Nav(){
    const {handleToggle}=useContext(ContextAPI)
    return(
        <nav className="container">
            <ul className="container">
                <li onClick={handleToggle}><Link to="/">HOME</Link></li>
                <li onClick={handleToggle}><Link to="https://github.com/Chethan-R-R/meta-frontend-capstone">ABOUT</Link></li>
                <li onClick={handleToggle}><Link to="/menu">MENU</Link></li>
                <li onClick={handleToggle}><Link to="/reservation/step1">RESERVATION</Link></li>
                <li onClick={handleToggle}><Link to="/order">ORDER ONLINE</Link></li>
                <li onClick={handleToggle}><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    )
}