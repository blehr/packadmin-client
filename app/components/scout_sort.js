import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { sortBy } from '../actions/index';


class ScoutSort extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    this.props.sortBy(value);
  }

  render() {
    return (
      <DropDownMenu
        value={this.props.sortedBy}
        onChange={this.handleChange}
        labelStyle={{ color: '#FFF' }}
        style={{ width: '175px' }}
        underlineStyle={{ borderTop: 'none' }}
        className="dropdown"
      >
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

    );
  }
}

ScoutSort.propTypes = {
  sortedBy: PropTypes.string,
  sortBy: PropTypes.func,
};

const mapStateToProps = ({ sortedBy }) => (
  { sortedBy }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ sortBy }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ScoutSort);
