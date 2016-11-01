import React from 'react';
import MyAppBar from './my_app_bar';
import UserDisplay from '../containers/user_display';


const Header = () => (
  <header className="container">
    <div className="row text-center" >
      <div className="col-sm-12">
        <div className="header">
          <div>
            <h1>The Pack Admin</h1>
            <h3>The Cub Master's Secret</h3>
          </div>
        </div>
        <div className="app-bar-container">
          <MyAppBar />
          <UserDisplay />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
