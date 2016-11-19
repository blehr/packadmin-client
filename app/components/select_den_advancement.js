import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import * as actions from '../actions/index';
import { ranks } from '../utils/util';

const style = {
  width: '150px',
};


class SelectDevAdv extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      selectValue: this.getRank(),
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    this.props.setAdvancement(value);
    this.getRank();
  }
  getRank() {
    
    let rank = '';
    
    if (this.props.user.profile.customDens.length > 0) {
      this.props.user.profile.customDens.forEach((den) => {
        if (this.props.scouts.advDen === den.name) { rank = den.rank; }
      });
    }
    
    if (this.props.user.profile.customDens.length === 0) {
      ranks.forEach((den) => {
        if (this.props.scouts.advDen === den.rank) { rank = den.rank; }
      });
    }
    
    this.setState({ 'selectValue': rank });
    return rank;
  }

  render() {
    
    return (
      <DropDownMenu
        value={this.state.selectValue}
        onChange={this.handleChange}
        style={style}
      >
        <MenuItem value={'Bobcat'} primaryText="Bobcat" />
        <MenuItem value={'Lion'} primaryText="Lion" />
        <MenuItem value={'Tiger'} primaryText="Tiger" />
        <MenuItem value={'Wolf'} primaryText="Wolf" />
        <MenuItem value={'Bear'} primaryText="Bear" />
        <MenuItem value={'Webelos'} primaryText="Webelos" />
      </DropDownMenu>

    );
  }
}

SelectDevAdv.propTypes = {
  user: PropTypes.object,
  scouts: PropTypes.object,
  advDen: PropTypes.string,
  setAdvancement: PropTypes.func,
};

const mapStateToProps = ({ scouts, user }) => ({
  scouts,
  user,
});

export default connect(mapStateToProps, actions)(SelectDevAdv);
