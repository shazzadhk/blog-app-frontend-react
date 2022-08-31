
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import {NavLink as ReactLink} from "react-router-dom";

const NavigationMenu = () => {
    return(
      <div>
      <Navbar color='dark' dark expand='md' fixed=''>
        <NavbarBrand tag={ReactLink} to="/">Blog App</NavbarBrand>
        <NavbarToggler/>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Services</DropdownItem>
                <DropdownItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/about">
                    About
                  </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Sign Up
                  </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Shazzad Hossain</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavigationMenu;