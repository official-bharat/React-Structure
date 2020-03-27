import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
		  <Navbar.Header>
		    <Link to="/">React-App</Link>
		  </Navbar.Header>
	      <Nav>
	        <NavItem>
	          <Button><Link to="/login">Login</Link></Button>
	          <Button><Link to="/sign-up">Signup</Link></Button>
	        </NavItem >
	      </Nav>
		</Navbar>
		<hr />
      </div>
    );
  }
}

export default Header;
