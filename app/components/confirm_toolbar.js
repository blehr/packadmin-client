import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import EditSVG from 'material-ui/svg-icons/editor/mode-edit';
import DeleteSVG from 'material-ui/svg-icons/action/delete';

const ConfirmToolbar = (props) => {
  const { remove, edit } = props;

  return (
    <div className="col-sm-6 col-sm-offset-3">
      <div className="confirm-toolbar">
        <FlatButton
          label="Edit"
          onClick={edit}
          primary
          icon={<EditSVG />}
        />
        <FlatButton
          label="Delete"
          onClick={remove}
          secondary
          icon={<DeleteSVG />}
        />
      </div>
    </div>
  );
};

ConfirmToolbar.propTypes = {
  edit: PropTypes.func,
  remove: PropTypes.func,
};

export default ConfirmToolbar;
