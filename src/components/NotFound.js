import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="vier">
        <div className="vier-logo">
          <img src="../../logo.png" alt="auto1-logo" />
        </div>
        <h1>404 - Not Found</h1>
        <h2>Sorry, the page you are looking for does not exist.</h2>
        <h2>
          You can always go back to{' '}
          <span>
            {' '}
            <Link to="/" className="homepage">
              <h2>homepage</h2>
            </Link>
          </span>
          .
        </h2>

        {/* <span>
          <p className="newuser">
            New user?{' '}
            <Link to="/signup" className="txt3">
              Sign up here.
            </Link>
          </p>
        </span> */}
      </div>
    </div>
  );
};

export default NotFound;
