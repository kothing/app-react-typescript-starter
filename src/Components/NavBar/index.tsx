import React from 'react';
import { Logo } from './Logo';
import { Nav } from './Nav';
import "./style.css";

export function NavBar() {
  return (
    <div className='nav-bar'>
      <Logo />
      <Nav />
    </div>
  );
}