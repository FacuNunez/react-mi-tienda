import React from "react";
import { NavLink} from "react-router-dom";
import CartWidget from "../CartWidget";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="containerNav">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav_link" to="/">PasionFutbol.com</NavLink>
                </div>
                <ul className="nav__list">
                    <li>
                        <NavLink className="nav__link" to="/categoria/camisetas">Camisetas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/categoria/shorts">Pantalones</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="cart"><CartWidget /></NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;