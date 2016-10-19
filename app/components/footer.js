import React from 'react';

const Footer = () => (
  <footer className="container">
    <div className="row">
      <div className="col-sm-12">
      </div>
    </div>
    <div className="row" >
      <div className="col-sm-4 text-center"></div>
      <div className="col-sm-4 text-center">
        <p>Questions, Concerns, or Suggestions?</p>
        <p><a href="mailto:blehr.mail@gmail.com"><i className="fa fa-envelope-o"></i> blehr.mail@gmail.com</a></p>
        <p><a href="https://twitter.com/brandonlehr"><i className="fa fa-twitter"></i> @brandonlehr</a></p>
        <p>&copy; 2016 <a href="http://brandonlehr.com" >Brandon Lehr</a></p>
      </div>
      <div className="col-sm-4"></div>
    </div>
  </footer>
);

export default Footer;
