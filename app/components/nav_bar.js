import React from 'react';
import Tab from './tab';


const NavBar = () => (
  <nav>
    <ul className="nav nav-tabs hidden-print">
      <Tab to="/" onlyActiveOnIndex index >Home</Tab>
      <Tab to="/scouts">Roster</Tab>
      <Tab to="/scouts/add" >Add Scout</Tab>
    </ul>
  </nav>
);

export default NavBar;
