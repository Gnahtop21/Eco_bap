import React from 'react'
import { NavLink } from 'react-router-dom'
import '../cssPages/Header.css'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="container-header">
            <div className="header-content">
                <div className="logo-container">
                    <img src={logo} alt="logo" className='logo' />
                </div>
                <nav className="nav-links">
                    <NavLink to="/" className="horizontal-menu">
                        <span className="nav-text"><strong>Home</strong></span>
                    </NavLink>
                    <NavLink to="/news" className="horizontal-menu">
                        <span className="nav-text">News</span>
                    </NavLink>
                    <NavLink to="/shop" className="horizontal-menu">
                        <span className="nav-text">Shop</span>
                    </NavLink>
                    <NavLink to="/contact" className="horizontal-menu">
                        <span className="nav-text">Contact</span>
                    </NavLink>
                    <NavLink to="/cart" className="horizontal-menu">
                        <span className="nav-text">
                            Cart <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header
