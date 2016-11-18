import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import DeleteSVG from 'material-ui/svg-icons/action/delete';


const DisplayCustomDens = ({ customDens, deleteDen }) => {
  const elem = customDens.map(den => (
    <div className="list-item custom-den-item" key={den.name} >
      <span>{den.name}</span>
      <span>{den.rank}</span>
      <FlatButton
        type="button"
        label=""
        icon={<DeleteSVG />}
        onClick={() => deleteDen(den)}
        primary
      />
    </div>
  ));
  return (
    <div className="list-group">
      {elem}
    </div>
  );
};

DisplayCustomDens.propTypes = {
  customDens: PropTypes.array,
  deleteDen: PropTypes.func,
};

export default DisplayCustomDens;
