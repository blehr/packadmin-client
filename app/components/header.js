import React from 'react';
import MyAppBar from './my_app_bar';
import UserDisplay from '../containers/user_display';

import logoUrl from '../images/pack_admin_logo.png';

const Header = () => (
  <header className="container">
    <div className="row text-center" >
      <div className="col-sm-12">
        <div className="header">
          <div>
            <h1>The Pack Admin</h1>
            <h3>The Cub Master's Secret</h3>
          </div>
          {/* <div className="logo-img">
            <img src={logoUrl} alt="pack admin logo" className="img-responsive" />
          </div> */}
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
