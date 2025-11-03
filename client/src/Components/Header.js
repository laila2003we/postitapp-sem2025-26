import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <img src={logo} />
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/Login">Profile</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
