import React from 'react';
import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './TYLER DUNHAM (2).png';

function MyNavbar () {
    return (
        <div className="App">
         <Navbar className="justify-content-center">
            <Nav>
              <Nav.Link className="navbar-link-left" href="https://github.com/Tyler-Dunham" target="_blank">GitHub</Nav.Link>
              <Nav.Link className="navbar-link-left" href="/projects" target="_blank">Projects</Nav.Link>
              <Navbar.Brand className="logo"><a href="/"><Image className="logo" src={logo}/></a></Navbar.Brand>
              <Nav.Link className="navbar-link-right" href="https://twitter.com/cobain_ow" target="_blank">Twitter</Nav.Link>
              <Nav.Link className="navbar-link-right" href="/contact" target="_blank">Contact Me</Nav.Link>
            </Nav>
          </Navbar>
          <hr/> 
        </div>
    );
}

export default MyNavbar;