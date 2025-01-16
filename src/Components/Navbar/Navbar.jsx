import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate} from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
        navigate('/login'); 
    };
    return (
        <div className='navbar'>
        <div className="nav-logo">Elite-Hotel</div>
        
            <ul className='nav-items'>
                <li><NavLink to="/">Home</NavLink></li>
                <li class="link"><NavLink to="/reservation">Reservation</NavLink></li>
                <li class="link"><NavLink to="/blog">Blog</NavLink></li>
                <li class="link"><NavLink to="/about-us">About Us</NavLink></li>
                <li class="link"><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
        
        <div className='nav-login'>
            <button onClick={handleLoginClick}>Login</button><i class="fa-regular fa-bell"></i>
            <div className="nav-bell-count">0</div>
        </div>
        </div>
    )
}
export default Navbar