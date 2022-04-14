import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './TYLER DUNHAM (2).png';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import MyNavbar from './MyNavbar.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
