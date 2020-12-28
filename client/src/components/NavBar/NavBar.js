import React, { Component } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap';
import {ReactAuthContext} from '../../contexts/AuthContext';

 class AppNavBar extends Component {
  static contextType = ReactAuthContext;

  

    render() {
      if(this.context.isAuthenticated){
        return (
          <div>
            <Navbar variant="dark" bg="dark">
            <Navbar.Brand href="/">MERN AUTH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-left">
              <Nav.Link href="#">Home
                <Button onClick={()=>this.context.logout()}>Logout</Button>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
          </div>
        )
      }else{
        return (
          <div>
            <Navbar variant="dark" bg="dark" >
            <Navbar.Brand href="/" className="ml-5">MERN AUTH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-left">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">SignUp</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
          </div>
        )
      }
    }
}

export default AppNavBar;
