import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="row">
    <div className="col-sm-12">
      <div className="welcome-card">
        <div className="text-center">
          <h2>Welcome to the Cub Master Control</h2>
          <p className="lead">Lions, Tigers, and Bears OH MY!</p>
        </div>
        <div className="welcome-flex-container">
          <div className="welcome-flex-col">
            <h3 className="text-center">Record Keeping is Hard!</h3>
            <p>We all know that the one of the most important factors towards having a successful Cub Scout Pack, is record keeping. We need to know how many cubs we have, how many in each den, who's paid and who hasn't, who is their parent and what is their contact information.</p>
            <p>Managing all this information in a notebook or spreadsheet can be tedious. <strong>How can you store all of this information and then have access to what you need when you need it?</strong></p>
          </div>
          <div className="welcome-flex-col">
            <h3 className="text-center">Cub Master's Solution</h3>
            <p>Things are geting better. Now we have the Cub Master Control! Here we can securely, and easily store and retrieve all of our cubs information.</p>
            <p>Simply <Link to="/signup" >create an acount</Link> an begin tracking your cubs today!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
