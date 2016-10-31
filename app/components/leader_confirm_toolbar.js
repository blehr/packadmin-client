import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import EditSVG from 'material-ui/svg-icons/editor/mode-edit';
import DeleteSVG from 'material-ui/svg-icons/action/delete';

const LeaderConfirmToolbar = (props) => {
  const { leader, removeLeader } = props;

  const handleOnClickEdit = (id) => {
    browserHistory.push(`/leaders/update/${id}`);
  };
  const handleOnClickDelete = (id) => {
    removeLeader(id);
  };

  return (
    <div className="col-sm-6 col-sm-offset-3">
      <div className="confirm-toolbar">
        <FlatButton
          label="Edit"
          onClick={() => handleOnClickEdit(leader._id)}
          primary
          icon={<EditSVG />}
        />
        <FlatButton
          label="Delete"
          onClick={() => handleOnClickDelete(leader._id)}
          secondary
          icon={<DeleteSVG />}
        />
      </div>
    </div>
  );
};

LeaderConfirmToolbar.propTypes = {
  leader: PropTypes.object,
  removeLeader: PropTypes.func,
};

export default LeaderConfirmToolbar;
