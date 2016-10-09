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
    
    if (this.props.filter === 'byDen') {
      
        return (
          <div className="col-sm-12">
            <h3>Lion Den  <span className="scout-count">({filteredScouts.scouts.lion.length})</span></h3>
            <div>
              {filteredScouts.scouts.lion.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
            <hr/>
            <h3>Tiger Den  <span className="scout-count">({filteredScouts.scouts.tiger.length})</span></h3>
            <div>
              {filteredScouts.scouts.tiger.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
            <hr/>
            <h3>Wolf Den  <span className="scout-count">({filteredScouts.scouts.wolf.length})</span></h3>
            <div>
              {filteredScouts.scouts.wolf.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
            <hr/>
            <h3>Bear Den  <span className="scout-count">({filteredScouts.scouts.bear.length})</span></h3>
            <div>
              {filteredScouts.scouts.bear.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
            <hr/>
            <h3>Webelos 1  <span className="scout-count">({filteredScouts.scouts.web1.length})</span></h3>
            <div>
              {filteredScouts.scouts.web1.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
            <hr/>
            <h3>Webelos 2  <span className="scout-count">({filteredScouts.scouts.web2.length})</span></h3>
            <div>
              {filteredScouts.scouts.web2.map(scout => {
                return <RosterItem scout={scout} key={scout._id}  />;
              })}
            </div>
          </div>
        );

    } else {
      return (
        <div className="col-sm-12">
          <h3>{filteredScouts.title}  <span className="scout-count">({filteredScouts.scouts.length})</span></h3>
          <div>
          {filteredScouts.scouts.map(scout => {
            return <RosterItem scout={scout} key={scout._id}  />;
          })}
          </div>
        </div>
      );
    }
    
  }
}

export default Roster;