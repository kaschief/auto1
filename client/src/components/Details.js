import React from 'react';
import Button from './Button';

const Details = () => {
  return (
    <div className="Details">
      <div className="banner" />
      <div className="details-info">
        <div className="first">
          <h1>Chrysler Crossfire</h1>
          <p className="stock">Stock # 61184 - 152.263 KM - Petrol - Yellow</p>
          <p className="car-status">
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </div>
        <div className="second">
          <div className="contents">
            <p>
              If you like this car, click the button and save it in your
              collection of favourite items.
            </p>
            <Button className="detail-button" text="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
