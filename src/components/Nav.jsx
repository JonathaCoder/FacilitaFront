import React, { useState } from 'react';

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavComponent(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='NavComp'>
      <div>
        <img src="" alt="" />
      </div>
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
         Cadastro
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Produtos</NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}

export default NavComponent;