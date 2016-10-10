import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { sortBy } from '../actions/index';


class RosterToolbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    this.props.sortBy(value);
  }

  render() {
    return (
      <Toolbar className="roster-toolbar" style={{ backgroundColor: '#F48FB1' }} >
        <ToolbarGroup >
          <DropDownMenu value={this.props.sortedBy} onChange={this.handleChange} labelStyle={{ color: '#FFF' }} className="dropdown" >
            <MenuItem value={'all'} primaryText="All Scouts" />
            <MenuItem value={'byDen'} primaryText="By Den" />
            <MenuItem value={'Lion'} primaryText="Lion" />
            <MenuItem value={'Tiger'} primaryText="Tiger" />
            <MenuItem value={'Wolf'} primaryText="Wolf" />
            <MenuItem value={'Bear'} primaryText="Bear" />
            <MenuItem value={'Webelos 1'} primaryText="Webelos 1" />
            <MenuItem value={'Webelos 2'} primaryText="Webelos 2" />
            <MenuItem value={'paid'} primaryText="Dues Paid" />
            <MenuItem value={'unpaid'} primaryText="Dues Unpaid" />
          </DropDownMenu>
        </ToolbarGroup >
      </Toolbar>

    );
  }
}

RosterToolbar.propTypes = {
  sortedBy: PropTypes.string,
  sortBy: PropTypes.func,
};

const mapStateToProps = function ({ sortedBy }) {
  return { sortedBy };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ sortBy }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RosterToolbar);
