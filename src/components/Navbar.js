import React from 'react';
import { elastic as Menu} from 'react-burger-menu';
import {NavLink} from 'react-router-dom';

const NavMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Menu
        customBurgerIcon={
          <img src={require("../img/menu-icon.png")} alt="nav-burger" />
        } 
        isOpen={isOpen}
        onStateChange={() => setIsOpen(!isOpen)}
        right
      >
  
          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/event">
              Event
            </NavLink>
            <NavLink className="nav-link" to="/pronite">
              Pronite
            </NavLink>
            <NavLink className="nav-link" to="/team">
              The Team
            </NavLink>
            <NavLink className="nav-link" to="/sponsors">
              Sponsors
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
       
      </Menu>
    );
  };
  
  export default NavMenu;