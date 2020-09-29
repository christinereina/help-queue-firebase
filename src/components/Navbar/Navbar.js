import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements';

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon />
          HELP QUEUE
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
