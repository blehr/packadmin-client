import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import * as actions from '../actions/index';

const style = {
  width: '150px',
};


class SelectDevAdv extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    this.props.setAdvancement(value);
  }

  render() {
    return (
      <DropDownMenu
        value={this.props.adv.advDen}
        onChange={this.handleChange}
        style={style}
      >
        <MenuItem value={'Lion'} primaryText="Lion" />
        <MenuItem value={'Tiger'} primaryText="Tiger" />
        <MenuItem value={'Wolf'} primaryText="Wolf" />
        <MenuItem value={'Bear'} primaryText="Bear" />
        <MenuItem value={'Webelos 1'} primaryText="Webelos" />
      </DropDownMenu>

    );
  }
}

SelectDevAdv.propTypes = {
  adv: PropTypes.object,
  advDen: PropTypes.string,
  setAdvancement: PropTypes.func,
};

const mapStateToProps = ({ adv }) => ({
  adv,
});

export default connect(mapStateToProps, actions)(SelectDevAdv);
