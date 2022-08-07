import React from "react";
import ReactLogo from "../images/reactjs-icon.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <div className="nav--logo">
                <img className="nav--logo_icon" src={ReactLogo} alt="react logo" />
                <div className="nav--logo_text">
                    <h2>ReactFacts</h2>
                    <h3>React Course - Project 1</h3>
                </div>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}