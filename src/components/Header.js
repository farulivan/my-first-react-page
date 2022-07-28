import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
    return (
        <header>
            <nav className="nav-container">
            <img src={logo} alt="logo React" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}