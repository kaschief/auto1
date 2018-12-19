import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from './Button';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class Filter extends Component {
  componentDidMount() {
    console.log('props to FILTER', this.props);
    this.props.onPageLoad.getColors();
    this.props.onPageLoad.getManufacturers();
  }
  render() {
    return (
      <div className="Filter">
        <div className="filter-contents">
          <p>Color</p>
          <Dropdown
            className="dropdown"
            options={this.props.theColors}
            onChange={color => this.props.onColorSelect(color.value)}
            /* value={defaultColor} */
            placeholder="All car colors"
          />

          <p>Manufacturer</p>
          <Dropdown
            className="dropdown"
            options={this.props.theManufacturers}
            onChange={manufacturer =>
              this.props.onManufacturerSelect(manufacturer.value)
            }
            /* value={defaultManufacturer} */
            placeholder="All manufacturers"
          />

          <Button className="filter-button" text="Filter" />
        </div>
      </div>
    );
  }
}

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
      dispatch(actionCreators.selectManufacturer(manufacturer)),
    onPageLoad: {
      getColors: () => dispatch(actionCreators.getColors()),
      getManufacturers: () => dispatch(actionCreators.getManufacturers())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
