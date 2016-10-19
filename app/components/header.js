import React from 'react';
import MyAppBar from './my_app_bar';

const Header = () => (
  <header className="container">
    <div className="row text-center" >
      <div className="col-sm-12">
        <div className="header">
          <h1 className="headerFont">Pack Admin</h1>
        </div>
        <MyAppBar />
      </div>
    </div>
  </header>
);

export default Header;
