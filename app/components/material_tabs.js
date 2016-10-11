import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  backgroundColor: {
    background: '#3F51B5',
  },
};

class MaterialTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'a',
    };
  }
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Home" value="a" />
        <Tab label="Roster" value="b" />
        <Tab label="Add Scouts" value="c" />
        <Tab label="Profile" value="d" />
      </Tabs>
    );
  }
}

export default MaterialTab;
