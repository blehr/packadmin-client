import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const MyMenu = () => (
  <div className="my-menu">
    <Link to="/" ><FlatButton label="Home" labelStyle={{ color: '#FFF' }} /></Link>
    <Link to="/scouts" ><FlatButton label="Roster" labelStyle={{ color: '#FFF' }} /></Link>
    <Link to="/scouts/add" ><FlatButton label="Add Scouts" labelStyle={{ color: '#FFF' }} /></Link>
  </div>
);


export default MyMenu;
