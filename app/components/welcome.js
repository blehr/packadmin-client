import React from 'react';

const Welcome = () => (
  <div>
    <div className="row">
      <div className="col-sm-12">
        <div className="welcome-card">
          <div className="text-center">
            <h2>Thank You for using The Pack Admin</h2>
            <p className="lead">Here are some tips on getting started.</p>
          </div>
          <div className="welcome-flex-container">
            <div className="welcome-flex-col">
              <h3 className="text-center">Multiple Dens?</h3>
              <p>By default, The Pack Admin is setup for tracking a single den for each rank. ( 1 Tiger den, 1 Wolf den, ...)</p>
              <p>If your pack host multiple dens of the same rank you can create them <i>here</i></p>
            </div>
            <div className="welcome-flex-col">
              <h3 className="text-center">The Cub Master's Solution</h3>
              <p>Now we have the Pack Admin! Here we can easily, and securely store and retrieve all of our cubs information.</p>
              <p>Simply <Link to="/signup" >create an acount</Link> and begin tracking your cubs today!</p>
              <p>Questions, Concerns, or Suggestions?</p>
              <ul className="list-unstyled">
                <li><a href="mailto:blehr.mail@gmail.com"><i className="fa fa-envelope-o"></i> blehr.mail@gmail.com</a></li>
                <li><a href="https://twitter.com/brandonlehr"><i className="fa fa-twitter"></i> @brandonlehr</a></li>
              </ul>
            </div>
          </div>
          <div className="form-buttons-container">
            <Link to="/signin" >
              <RaisedButton
                type="button"
                label="Sign In"
                style={style}
                labelColor={'#FFF'}
                secondary
              />
            </Link>
            <Link to="/signup">
              <RaisedButton
                type="button"
                label="Sign Up"
                style={style}
                labelColor={'#FFF'}
                primary
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <PinewoodAd />
  </div>
)
