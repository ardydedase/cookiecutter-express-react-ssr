import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

declare global {
  interface Window {
      username:string;
  }
}

export class TopNav extends React.Component {
  state = {
    username: null,
  };

  constructor(_props: any) {
    super(_props);
  }

  componentDidMount() {
    this.setState({
      username: window.username,
    });
  }

  render() {
    let accountDropdown;
    const { username } = this.state;
    if (username) {
      accountDropdown = (
        <Nav className="justify-content-end">
          <NavDropdown alignRight title={username} id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#account">Account</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      );
    }
    return (
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">Node React SSR</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/repos">Repos</Nav.Link>
        </Nav>
        {accountDropdown}
      </Navbar>
    );
  }
}
