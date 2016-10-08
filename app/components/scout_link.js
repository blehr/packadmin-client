import React, { Component, PropTypes } from 'react';
import { Link, browserHistory  } from 'react-router';


class ScoutLink extends Component {
  static propTypes = {
    scout: PropTypes.Object,
    removeScout: PropTypes.func
  }
  
  constructor(props) {
    super(props);
  }
 
  doRemoveScout(id) {
    this.props.removeScout(id);
    browserHistory.push('/scouts');
  }
  
  render() {
    const { scout } = this.props;
     return (
      <div className="card-row" >
        <div className="card-column-1">
          <h4><i className="fa fa-user" ></i>  <Link to={`/scouts/update/${scout._id}`} > {scout.scoutFirstName} {scout.scoutLastName} <i className="fa fa-pencil" aria-hidden="true"></i></Link></h4>
        </div>
        <div className="card-column-2">
          <h4><a onClick={() => {this.doRemoveScout(scout._id)}} >Delete: <i className="fa fa-trash-o" aria-hidden="true"></i></a></h4>
        </div>
      </div> 
    );
  }
}

export default ScoutLink;
