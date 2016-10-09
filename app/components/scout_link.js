import React, { Component, PropTypes } from 'react';

class ScoutLink extends Component {
  static propTypes = {
    scout: PropTypes.Object,
    removeScout: PropTypes.func
  }
  
  constructor(props) {
    super(props);
  }
  render() {
    const { scout } = this.props;
     return (
      <div className="card-row" >
        <h4 className="scout-link-name"><i className="fa fa-user" ></i> {scout.scoutFirstName} {scout.scoutLastName} </h4>
      </div> 
    );
  }
}

export default ScoutLink;
