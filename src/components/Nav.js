import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="nav-logo">
        <Link to="/">
          <img className="logo" src="../../logo.png" alt="auto1-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <span>Purchase</span>
        <span>My Orders</span>
        <span>Sell</span>
      </div>
    </div>
  );
};

export default Nav;
