import React from 'react';
import Button from './Button';

const Filter = () => {
  return (
    <div className="Filter">
      <div className="filter-contents">
        <p>Color</p>
        <span className="box">Color Buttoooooooooooooooon</span>
        <p>Manufacturer</p>
        <span className="box">Manufacturer Buttooooooooooon</span>
        <Button className="filter-button" text="Filter" />
      </div>
    </div>
  );
};

export default Filter;
