import React from 'react';
import '../App.css';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
//import { Route, Router, Routes } from 'react-router-dom';

function Navb() {
  return (
    <div className='navs'> 
      <Navbar color='info' expand container='lg' >
        <NavbarBrand>PHARMACARE</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Navb;