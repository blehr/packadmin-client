import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import EditSVG from 'material-ui/svg-icons/editor/mode-edit';
import DeleteSVG from 'material-ui/svg-icons/action/delete';

const ConfirmToolbar = (props) => {
  const { scout, removeScout } = props;

  const handleOnClickEdit = (id) => {
    browserHistory.push(`/scouts/update/${id}`);
  };
  const handleOnClickDelete = (id) => {
    removeScout(id);
    browserHistory.push('/scouts');
  };

  return (
    <div className="col-sm-6 col-sm-offset-3">
      <div className="confirm-toolbar">
        <FlatButton
          label="Edit"
          onClick={() => handleOnClickEdit(scout._id)}
          primary
          icon={<EditSVG />}
        />
        <FlatButton
          label="Delete"
          onClick={() => handleOnClickDelete(scout._id)}
          secondary
          icon={<DeleteSVG />}
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
