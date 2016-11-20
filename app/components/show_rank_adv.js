import React, { Component, PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const style = {
  width: '150px',
};


class ShowRank extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    event.preventDefault();
    this.props.changeAdvDen(value);
  }

  render() {
    return (
      <DropDownMenu
        value={this.props.activeDen}
        onChange={this.handleChange}
        style={style}
      >
        <MenuItem value={'Lion'} primaryText="Lion" />
        <MenuItem value={'Bobcat'} primaryText="Bobcat" />
        <MenuItem value={'Tiger'} primaryText="Tiger" />
        <MenuItem value={'Wolf'} primaryText="Wolf" />
        <MenuItem value={'Bear'} primaryText="Bear" />
        <MenuItem value={'Webelos 1'} primaryText="Webelos" />
      </DropDownMenu>

    );
  }
}

ShowRank.propTypes = {
  activeDen: PropTypes.string,
  changeAdvDen: PropTypes.func,
};

export default ShowRank;
