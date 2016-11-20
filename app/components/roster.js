import React, { PropTypes } from 'react';
import RosterItem from './roster_item';
import { filterBy } from '../utils/util';
import ErrorDisplay from '../containers/error_container';

const Roster = (props) => {
  const { scouts, filter, customDens } = props;
  const filteredScouts = filterBy(scouts, filter, customDens);
  const filteredScoutsKeys = Object.keys(filteredScouts.scouts);
  if (filter === 'byDen') {
    let keyValue = 0;
    const byDenKeys = filteredScoutsKeys.filter(key => (
      key !== 'paid' && key !== 'unpaid'
    ));
    const elem = byDenKeys.map(key => (
      <span key={keyValue += 1}>
        <h3>{key}
          <span className="scout-count">
            ({filteredScouts.scouts[key].length})
          </span>
        </h3>
        <div>
          {filteredScouts.scouts[key].map(scout => (
            <RosterItem scout={scout} key={scout._id} />
          ))}
        </div>
        <hr />
      </span>
    ));
    return (
      <div className="col-sm-12" >
        {elem}
      </div>
    );
  }
  return (
    <div className="col-sm-12">
      <h3>{filteredScouts.title}
        <span className="scout-count">
          ({filteredScouts.scouts.length})
        </span>
      </h3>
      <ErrorDisplay />
      <div>
        {filteredScouts.scouts.map(scout => (
          <RosterItem scout={scout} key={scout._id} />
      ))}
      </div>
    </div>
  );
};

Roster.propTypes = {
  scouts: PropTypes.array,
  filter: PropTypes.string,
  customDens: PropTypes.array,
};

export default Roster;
