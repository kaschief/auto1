import React from 'react';
import { Link } from 'react-router-dom';

const Item = () => {
  return (
    <div className="Item">
      <div className="item-image" />
      <div className="item-desc">
        <h1>Chrysler Crossfire</h1>
        <p className="stock">Stock # 61184 - 152.263 KM - Petrol - Yellow</p>
        <span>
          {' '}
          <Link to="/" className="view">
            <p className="view-link">View details</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Item;
