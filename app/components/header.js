import React from 'react';
import MyAppBar from './my_app_bar';
import UserDisplay from '../containers/user_display';
import GoogleAd from './google_ad';

const style = {
  marginTop: '5px',
  marginBottom: '15px',
};

const Header = () => (
  <header className="container">
    <div className="row">
      <div className="col-sm-12">
        <GoogleAd
          client="ca-pub-9453781066915703"
          slot="2670484201"
          format="auto"
          wrapperDivStyle={style}
        />
      </div>
    </div>
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
