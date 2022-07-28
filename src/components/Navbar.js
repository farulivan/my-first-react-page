import React from "react";
import ReactLogo from "../images/reactjs-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactLogo} alt="react logo" />
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}