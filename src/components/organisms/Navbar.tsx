import React, { useState } from 'react';
import { Nav, Hamburger, NavLinks, NavLink } from '../../styles/organisms';
import { NavbarProps } from '../../interfaces/organisms';
import { Link } from '../atoms';

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLink>
          <Link to="/contact">Contact</Link>
        </NavLink>
        <NavLink>
          <Link to="/register">Register</Link>
        </NavLink>
        <NavLink>
          <Link to="/login">Login</Link>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
