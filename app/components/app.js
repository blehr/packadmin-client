import React, { PropTypes, Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/styles.css';


class App extends Component {
  getChildContext() {
    return { location: this.props.location };
  }
  render() {
    return (
      <div className="body">
        <Header />
        <div className="container main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  location: React.PropTypes.object,
};

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default App;
