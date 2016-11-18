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
    let elem = [];
    if (this.props.user.profile.customDens.length > 0) {
      elem = this.props.user.profile.customDens.map(den => (
        <MenuItem value={den.name} primaryText={den.name} key={den.name} />
      ));
    } else {
      elem = [
        <MenuItem value={'Lion'} primaryText="Lion" key="Lion" />,
        <MenuItem value={'Tiger'} primaryText="Tiger" key="Tiger" />,
        <MenuItem value={'Wolf'} primaryText="Wolf" key="Wolf" />,
        <MenuItem value={'Bear'} primaryText="Bear" key="Bear" />,
        <MenuItem value={'Webelos 1'} primaryText="Webelos 1" key="Webelos 1" />,
        <MenuItem value={'Webelos 2'} primaryText="Webelos 2" key="Webelos 2" />,
      ];
    }
    return (
      <DropDownMenu
        value={this.props.sortedBy}
        onChange={this.handleChange}
        labelStyle={{ color: '#FFF' }}
        style={{ width: '175px' }}
        underlineStyle={{ borderTop: 'none' }}
      >
        <MenuItem value={'all'} primaryText="All Scouts" />
        <MenuItem value={'byDen'} primaryText="By Den" />
        {elem}
        <MenuItem value={'paid'} primaryText="Dues Paid" />
        <MenuItem value={'unpaid'} primaryText="Dues Unpaid" />
      </DropDownMenu>

    );
  }
}

ScoutSort.propTypes = {
  sortedBy: PropTypes.string,
  sortBy: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = ({ sortedBy, user }) => ({
  sortedBy,
  user,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ sortBy }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ScoutSort);
