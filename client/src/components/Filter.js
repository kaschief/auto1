import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from './Button';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const Filter = props => {
  console.log('props from FILTER', props);
  return (
    <div className="Filter">
      <div className="filter-contents">
        <p>Color</p>
        <Dropdown
          className="dropdown"
          options={props.theColors}
          onChange={color => props.onColorSelect(color.value)}
          /* value={defaultColor} */
          placeholder="All car colors"
        />

        <p>Manufacturer</p>
        <Dropdown
          className="dropdown"
          options={props.theManufacturers}
          onChange={manufacturer =>
            props.onManufacturerSelect(manufacturer.value)
          }
          /* value={defaultManufacturer} */
          placeholder="All manufacturers"
        />

        <Button className="filter-button" text="Filter" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theColors: state.colors,
    theManufacturers: state.manufacturers
  };
};

//which kind of actions do you want to dispatch from this container?

const mapDispatchToProps = dispatch => {
  return {
    onColorSelect: color => dispatch(actionCreators.selectColor(color)),
    onManufacturerSelect: manufacturer =>
      dispatch(actionCreators.selectManufacturer(manufacturer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
