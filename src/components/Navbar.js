import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

const NavMenu = props => {
  return (
    <Menu
      customBurgerIcon={
        <img
          src={require("../img/menu-icon.png")}
          className={props.isOpen ? "hidden" : ""}
          alt="nav-burger"
        />
      }
      isOpen={props.isOpen}
      onStateChange={() => props.toggleMenu(!props.isOpen)}
      right
    >
      <div className="nav-links">
        <NavLink className="nav-link" to="/" onClick={props.toggleMenu}>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/event" onClick={props.toggleMenu}>
          Event
        </NavLink>
        <NavLink className="nav-link" to="/pronite" onClick={props.toggleMenu}>
          Pronite
        </NavLink>
        <NavLink className="nav-link" to="/team" onClick={props.toggleMenu}>
          The Team
        </NavLink>
        <NavLink className="nav-link" to="/sponsors" onClick={props.toggleMenu}>
          Sponsors
        </NavLink>
        <NavLink className="nav-link" to="/about" onClick={props.toggleMenu}>
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={props.toggleMenu}>
          Contact
        </NavLink>
      </div>
    </Menu>
  );
};

export default NavMenu;
