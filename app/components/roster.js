import React, { Component, PropTypes } from 'react';
import RosterItem from './roster_item';
import { alphabetize, byDen, filterBy } from '../utils/util';

class Roster extends Component {
  constructor(props) {
    super(props);
      
  }

  render() {
    const filteredScouts = filterBy(this.props.scouts, this.props.filter);
    console.log('filter: ', this.props.filter, filteredScouts);
    return (
      <div>
        <h3>{filteredScouts.title}</h3>
        <div>
        {filteredScouts.scouts.map(scout => {
            return <RosterItem scout={scout} key={scout._id}  />;
        })}
        </div>
      </div>
    );
  }
}

export default Roster;
