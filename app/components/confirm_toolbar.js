import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { grey100 } from 'material-ui/styles/colors';

const style = {
  margin: 12,
};


const ConfirmToolbar = (props) => {
  const { scout, removeScout } = props;

  const handleOnClickAdd = () => {
    browserHistory.push('/scouts/add');
  };
  const handleOnClickEdit = (id) => {
    browserHistory.push(`/scouts/update/${id}`);
  };
  const handleOnClickDelete = (id) => {
    removeScout(id);
    browserHistory.push('/scouts');
  };

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <RaisedButton
          label="Edit"
          onClick={() => handleOnClickEdit(scout._id)}
          primary style={style}
        />
        <RaisedButton
          label="Delete"
          onClick={() => handleOnClickDelete(scout._id)}
          secondary style={style}
        />
        <RaisedButton
          label="Add a Scout"
          onClick={() => handleOnClickAdd()}
          style={style}
          backgroundColor={grey100}
        />
      </div>
    </div>
  );
};

ConfirmToolbar.propTypes = {
  scout: PropTypes.object,
  removeScout: PropTypes.func,
};

export default ConfirmToolbar;
