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
        <Tab label="Alphabetical" value="a" />
        <Tab label="Lion" value="b" />
        <Tab label="Tiger" value="c" />
        <Tab label="Wolf" value="d" />
        <Tab label="Bear" value="e" />
        <Tab label="Webelos 1" value="f" />
        <Tab label="Webelos 2" value="g" />
      </Tabs>
    );
  }
}

export default MaterialTab;
