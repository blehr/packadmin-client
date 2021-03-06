import React from 'react';
import { Link } from 'react-router';
import GoogleAd from './google_ad';

const style = {
  marginBottom: '20px',
};

const Footer = () => (
  <footer className="container">
    <div className="row">
      <div className="col-sm-12">
        <GoogleAd
          client="ca-pub-9453781066915703"
          slot="1472952604"
          format="auto"
          wrapperDivStyle={style}
        />
      </div>
    </div>
    <div className="row" >
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <p>Questions, Concerns, or Suggestions?</p>
        <p>
          <a href="mailto:blehr.mail@gmail.com">
            <i className="fa fa-envelope-o" /> blehr.mail@gmail.com</a>
        </p>
        <p><a href="https://twitter.com/brandonlehr"><i className="fa fa-twitter" /> @brandonlehr</a></p>
        <p><Link to="/privacy" >Privacy Policy</Link></p>
        <p>&copy; 2016 <a href="http://brandonlehr.com" >Brandon Lehr</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
