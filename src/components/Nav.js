import React, { useState, useEffect } from 'react';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="nav-logo">Logo</div>
      <div className="nav-links">
        <p>Purchase</p>
        <p>My Orders</p>
        <p>Sell</p>
      </div>
    </div>
  );
};

export default Nav;
