import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
  return (
    <header>
      <h2>Mega Menu Test</h2>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/settings'>Settings</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;