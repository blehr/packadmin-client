import React, { Component, PropTypes } from 'react';

const ScoutLink = (props) => {
  const { scout } = props;
  return (
    <div className="card-row" >
      <h4 className="scout-link-name"><i className="fa fa-user" ></i> {scout.scoutFirstName} {scout.scoutLastName} </h4>
    </div>
  );
};

ScoutLink.propTypes = {
  scout: PropTypes.object,
};

export default ScoutLink;
