import React, { PropTypes } from 'react';
import LeaderItem from './leader_item';

const LeaderRoster = ({ leaders }) => {
  const elem = leaders.map(leader => <LeaderItem leader={leader} key={leader._id} />);
  return (
    <div className="col-sm-12">
      { elem }
    </div>
  );
};

LeaderRoster.propTypes = {
  leaders: PropTypes.array,
};

export default LeaderRoster;
