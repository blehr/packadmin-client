import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class RosterItem extends Component {
  static propTypes = {
    scout: PropTypes.object
  }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { scout } = this.props;
    return (
      <Link to={`/scouts/detail/${scout._id}`} >
        <div className="roster-item">
        <h4>{ scout.scoutFirstName } { scout.scoutLastName } </h4>
        <span>{ scout.den }</span>
        </div>  
      </Link>
    );
  }
}

export default RosterItem;
