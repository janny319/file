import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from 'layout/Layout';

const Nav = () => {
    return(
        <div className="nav">
            <ul className="nav__list">
                {menuItems.map((item, index) => (
                    <li className="nav__item" key={index}>
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;