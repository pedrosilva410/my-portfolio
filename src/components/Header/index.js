import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

const Header = () => {
  let location = useLocation();
  console.log(typeof location.pathname);

  return (
    <header className="header">
      <ul className="nav">
        <li>
          <NavLink
            exact
            className="nav_item"
            activeClassName="nav_item_selected"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav_item"
            activeClassName="nav_item_selected"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="nav_item"
            activeClassName="nav_item_selected"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
      </ul>

      <div className="header__contact_container">
        <NavLink
          className="header__contact"
          activeClassName="nav_item_selected"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
