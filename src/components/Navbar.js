import React from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext"

const NavMenu = props => {
  const {isAuthenticated } =React.useContext(GlobalContext);

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
      disableAutoFocus
    >
      {isAuthenticated ? (
        <>
        <NavLink className="nav-link" to="/profile" onClick={props.toggleMenu}>Profile</NavLink>
        <NavLink className="nav-link" to="/dashboard" onClick={props.toggleMenu}>Dashboard</NavLink>
        <NavLink className="nav-link" to="/event" onClick={props.toggleMenu}>Events</NavLink>
        <NavLink className="nav-link" to="/team" onClick={props.toggleMenu}>
          The Team
        </NavLink>
        <NavLink className="nav-link" to="/sponsors" onClick={props.toggleMenu}>
          Sponsors
        </NavLink>
        <NavLink className="nav-link" to="/about" onClick={props.toggleMenu}>
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={props.toggleMenu}>
          Contact Us
        </NavLink>
        <NavLink className="nav-link" to="/signout" onClick={props.toggleMenu}>Logout</NavLink>
        </>
      ) :(
      <> 
    <NavLink className="nav-link" to="/register" onClick={props.toggleMenu}>
     Register 
    </NavLink> 
    <NavLink className="nav-link" to="/login" onClick={props.toggleMenu}>
      Login
    </NavLink>
    <NavLink className="nav-link" to="/" onClick={props.toggleMenu}>
      Home
    </NavLink>
    <NavLink className="nav-link" to="/event" onClick={props.toggleMenu}>
      Events
    </NavLink>
    {/* <NavLink className="nav-link" to="/pronite" onClick={props.toggleMenu}>
      Pronites
    </NavLink> */}
    <NavLink className="nav-link" to="/team" onClick={props.toggleMenu}>
      The Team
    </NavLink>
    <NavLink className="nav-link" to="/sponsors" onClick={props.toggleMenu}>
      Sponsors
    </NavLink>
    <NavLink className="nav-link" to="/about" onClick={props.toggleMenu}>
      About Us
    </NavLink>
    <NavLink className="nav-link" to="/contact" onClick={props.toggleMenu}>
      Contact Us
    </NavLink>
    </>)
      }
     
    </Menu>
  );
};

export default NavMenu;
