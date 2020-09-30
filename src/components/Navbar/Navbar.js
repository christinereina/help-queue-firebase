import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClicker = () => setClick(!click)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon />
            HELP QUEUE
            </NavLogo>
          <MobileIcon onClick={handleClicker}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClicker}>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavMenu onClick={handleClicker}>
            <NavItem>
              <NavLinks to='/signin'>
                Sign In
              </NavLinks>
            </NavItem>  
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
