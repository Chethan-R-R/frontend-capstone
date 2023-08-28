import { Link } from 'react-router-dom'
import footerLogo from '../icons_assets/footer_logo.png'

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <img src={footerLogo} className='footerlogo' alt='little lemon footer logo' width={130} height={200} />
            </div>
            <div className="container">
                <h4>Navigation</h4>
                <Link to='/home'><h6>Home</h6></Link>
                <Link to='/about'><h6>About</h6></Link>
                <Link to='/menu'><h6>Menu</h6></Link>
                <Link to='/reservation'><h6>Reservation</h6></Link>
                <Link to='/order'><h6>Order Online</h6></Link>
                <Link to='/login'><h6>Login</h6></Link>
            </div>
            <div className="container">
                <h4>Contact</h4>
                <h6>phone: 987654321</h6>
                <h6>Email: little@lemon.com</h6>
                <h6>Address: Chicago</h6>
            </div>
            <div className="container">
                <h4>Social Media</h4>
                <h6>Twitter</h6>
                <h6>Instagram</h6>
                <h6>Pinterest</h6>
            </div>
        </footer>
    )
}