import React from "react";
import { menuItems } from 'layout/Layout';

const Nav = ({ onMenuClick }) => {
    return(
        <div className="nav">
            <ul className="nav__list">
                {menuItems.map((item, index) => (
                    <li className="nav__item" key={index} onClick={() => onMenuClick(item.link)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;