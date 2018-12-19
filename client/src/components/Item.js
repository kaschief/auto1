import React from 'react';
import { Link } from 'react-router-dom';
import { toTitleCase } from '../helper';

const Item = props => {
  return (
    <div className="Item">
      <div className="item-image" />
      <div className="item-desc">
        <h1>
          {props.manufacturerName} {props.modelName}
        </h1>
        <p className="stock">
          Stock # {props.stock} - {props.number} {props.unit} - {props.fuel} -{' '}
          {toTitleCase(props.color)}
        </p>
        <span>
          {' '}
          <Link to="/details/:id" className="view">
            <p className="view-link">View details</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Item;
