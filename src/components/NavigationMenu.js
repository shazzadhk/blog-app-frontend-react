import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { NavLink as ReactLink } from "react-router-dom";
import { useState, useContext } from "react";
import { doLogout } from "../auth";
// import { getCurrentUserDetail } from "../auth/index";
import { useNavigate } from "react-router";
import UserContext from "./../context/UserContext";

const NavigationMenu = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);
  // const [user, setUser] = useState(null);

  const contextData = useContext(UserContext);

  const navigate = useNavigate();

  const dosignout = () => {
    doLogout(() => {
      contextData.updateState(null, "logout");
      // setIsLogin(false);
      // setUser(null);
    });

    navigate("/login");
  };

  // useEffect(() => {
  //   setIsLogin(isLoggedIn());
  //   setUser(getCurrentUserDetail());
  // }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="">
        <NavbarBrand tag={ReactLink} to="/">
          Blog App
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsCollapse(!isCollapse)} />
        <Collapse isOpen={isCollapse} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contact_us">
                Contact Us
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Sign Up
              </NavLink>
            </NavItem> */}

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

          <Nav navbar>
            {contextData.user.login && (
              <>
                <NavItem>
                  <NavLink onClick={dosignout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>{contextData.user.data.name}</NavLink>
                  <NavLink tag={ReactLink} to="/user/dashboard">
                    {contextData.user.name}
                  </NavLink>
                </NavItem>
              </>
            )}

            {!contextData.user.login && (
              <>
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
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationMenu;
