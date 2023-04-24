import React from "react";
import './Menu.css'
import { NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <div className="menu-page">
      <ul>
        <li>
          <NavLink to={'/'}>
            Основна сторінка
          </NavLink>
        </li>
        <li>
          <NavLink to={'/products'}>
            Товари
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contacts'}>
            Контактна інформація 
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
