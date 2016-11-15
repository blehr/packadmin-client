import React from 'react';
import Pinewood from '../images/pinewoodraceday.jpg';

const PinewoodAd = () => (
  <div className="row">
    <div className="col-sm-12">
      <div className="welcome-card">
        <div className="text-center">
          <h2 className="pinewood-heading"><a href="http://pinewoodraceday.com">PinewoodRaceDay.com</a></h2>
        </div>
        <div className="welcome-flex-container">
          <div className="welcome-flex-col">
            <a href="http://pinewoodraceday.com" >
              <img src={Pinewood} className="img-responsive pinewood" alt="PinewoodRaceDay.com" />
            </a>
          </div>
          <div className="welcome-flex-col pinewood-text">
            <p
              className="lead text-center"
            >
              Manage Pinewood Derby and Rain Gutter Regatta Races with ease!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PinewoodAd;
