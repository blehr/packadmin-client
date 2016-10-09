import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class RosterToolbar extends Component {
  static propTypes = {
    sortedBy: PropTypes.string,
    sortBY: PropTypes.func
  } 
  constructor(props) {
    super(props);
  }
  
  handleChange = (event, index, value) => {
    this.props.sortBy(value);
  }
    
  render() {
    return (
      <Toolbar className="roster-toolbar" style={{'background-color': '#F48FB1'}} >
        <ToolbarGroup >
          <DropDownMenu value={this.props.sortedBy} onChange={this.handleChange} labelStyle={{color:'#FFF'}} className="dropdown" >
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

const mapStateToProps = function({sortedBy}) {
    return {sortedBy};
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({sortBy}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RosterToolbar);

