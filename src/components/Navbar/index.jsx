import React from "react";
import CartWidget from "../CartWidget"

const Nabvar = () => {
    return (
        <div className="containerNav">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav_link" href="#">Tienda de Camisetas</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Camisetas</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Pantalones</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"><CartWidget /></a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Nabvar;