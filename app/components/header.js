import React from 'react';
import NavBar from './nav_bar';

const Header = () => (
  <header>
    <div className="row text-center" >
      <div className="col-sm-12">
        <h1 className="headerFont">Awesome App</h1>
        <NavBar />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
      </div>
    </div>
  </header>
);

export default Header;
