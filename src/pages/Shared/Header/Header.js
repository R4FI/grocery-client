import React from 'react';
import { Container, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" collapseOnSelect className="bgnav"  expand="lg" variant="light">
    <Container>
    <Navbar.Brand as={Link} to={"/home"}>GS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto nav-text">
      <Nav.Link className="nav-text" as={Link} to={"/home"}>Home</Nav.Link>
      <NavDropdown className="droptittle ms-3" title="Products" id="basic-nav-dropdown">
      <NavDropdown.Item className="nav-text2" as={Link} to={"/fruits&veg"} href="#action/3.1">Fruits & Vagetable</NavDropdown.Item>
                <NavDropdown.Divider />
      <NavDropdown.Item className="nav-text2" as={Link} to={"/bakery"}  href="#action/3.1">Bakery</NavDropdown.Item>
                <NavDropdown.Divider />
      <NavDropdown.Item className="nav-text2" as={Link} to={"/spices"} href="#action/3.1">Spices</NavDropdown.Item>
                <NavDropdown.Divider />
      <NavDropdown.Item className="nav-text2" as={Link} to={"/cosmetics"} href="#action/3.1">Cosmetics</NavDropdown.Item>
                <NavDropdown.Divider />
      <NavDropdown.Item className="nav-text2" as={Link} to={"/kithcen"} href="#action/3.1">Kitchen</NavDropdown.Item>       
      </NavDropdown> 
      <Nav.Link className="nav-text ms-3" as={Link} to={"/about"}>About Us</Nav.Link>    
 
      { 
     
     user?.email?
     <Nav.Link as={Link} to={"/dashboard"} className="nav-text" >Dashboard
     <button
     onClick={logOut}
     className="btn logout ms-4">Log Out</button>
    </Nav.Link>:

       <Nav.Link className="nav-text" as={Link} to={"/signin"}>Sign In</Nav.Link>
   }

        <Navbar.Text className="ms-3">
                            {user?.email &&
                                <span className="m-auto">{user?.displayName}</span>
                            }
                            <span><img className="profile ms-3" src={user?.photoURL} alt="" /></span>

                        </Navbar.Text>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;