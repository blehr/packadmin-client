import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/styles.css';


const App = props =>
  <div className="container">
    <Header />
    {props.children}
    <Footer />
  </div>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
