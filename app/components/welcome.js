import React from 'react';
import { Link } from 'react-router';

const Welcome = () => (
  <div>
    <div className="row">
      <div className="col-sm-12">
        <div className="welcome-card">
          <div className="text-center">
            <h2>Thank You, for using The Pack Admin!</h2>
            <p className="lead">Here are some tips on getting started.</p>
          </div>
          <div className="welcome-flex-container">
            <div className="welcome-flex-col">
              <h3 className="text-center">Multiple Dens?</h3>
              <p>By default, The Pack Admin is setup for tracking a single den for each rank.</p>
              <ul>
                <li>Tiger</li>
                <li>Wolf</li>
                <li>Bear</li>
                <li>Webelos 1</li>
                <li>Webelos 2</li>
              </ul>
              <p>If your pack host multiple dens of the same rank you can create them all <Link to='/create-dens'>here</Link></p>
            </div>
            <div className="welcome-flex-col">
              <h3 className="text-center">Need Help?</h3>
              <p>If you encounter any problems, spot any potential bugs, or need assistance of any kind, feel free to contact me. I would be more than happy to help.</p>
              <p>Questions, Concerns, or Suggestions?</p>
              <ul className="list-unstyled">
                <li><a href="mailto:blehr.mail@gmail.com"><i className="fa fa-envelope-o"></i> blehr.mail@gmail.com</a></li>
                <li><a href="https://twitter.com/brandonlehr"><i className="fa fa-twitter"></i> @brandonlehr</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Welcome;
