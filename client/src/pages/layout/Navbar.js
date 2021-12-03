/** @format */

import React from 'react';
import NavLinks from './NavLinks';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './../../atoms/Button';
import './Navbar.css';

const Header = () => {
  return (
    <Navbar className="todo-app-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          NTK
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLinks />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
