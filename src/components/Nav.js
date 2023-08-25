import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="container">
            <ul className="container">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/reservation">RESERVATION</Link></li>
                <li><Link to="/order">ORDER ONLINE</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    )
}