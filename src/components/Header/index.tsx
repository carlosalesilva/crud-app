import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Navbar.Brand href="/">Desafio Flimed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item as={Link} className="nav-link" to="/">Home</Nav.Item>
          <Nav.Item as={Link} className="nav-link" to="/tarefas">Notas</Nav.Item>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;