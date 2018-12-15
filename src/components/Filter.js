import React from 'react';
import Button from './Button';

const Filter = () => {
  return (
    <div className="Filter">
      <div className="filter-contents">
        <p>Color</p>
        <span>Color Button</span>
        <p>Manufacturer</p>
        <span>Manufacturer Button</span>
        <Button className="filter-button" />
      </div>
    </div>
  );
};

export default Filter;
