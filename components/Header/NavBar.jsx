import React from 'react';

//NextUI
import { Navbar } from '@nextui-org/react';

const NavBar = () => {
  return (
    <Navbar variant="floating" containerCss={{ justifyContent: 'center' }}>
      <Navbar.Content enableCursorHighlight variant="underline-rounded" activeColor="success">
        <Navbar.Link isActive href="#">
          Moi
        </Navbar.Link>
        <Navbar.Link href="#">Projets</Navbar.Link>
        <Navbar.Link href="#">Experiences</Navbar.Link>
        <Navbar.Link href="#">Education</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavBar;
