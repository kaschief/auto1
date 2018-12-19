import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class Cars extends Component {
  componentDidMount() {
    this.props.onPageLoad();
  }
  render() {
    console.log('PROPS TO CARS', this.props);
    return (
      <div className="Cars">
        {this.props.theCars && this.props.theColor === ''
          ? this.props.theCars.map(c => {
              return (
                <Item
                  manufacturerName={c.manufacturerName}
                  modelName={c.modelName}
                  stock={c.stock}
                  number={c.mileage.number}
                  unit={c.mileage.unit}
                  fuel={c.fuelType}
                  color={c.color}
                />
              );
            })
          : this.props.theCars
              .filter(c => {
                return c.color === this.props.theColor;
              })
              .map(c => {
                return (
                  <Item
                    manufacturerName={c.manufacturerName}
                    modelName={c.modelName}
                    stock={c.stock}
                    number={c.mileage.number}
                    unit={c.mileage.unit}
                    fuel={c.fuelType}
                    color={c.color}
                  />
                );
              })}
      </div>
    );
  }
}

//which (slice of the) state do you want to get?

const mapStateToProps = state => {
  return {
    theCars: state.cars,
    theColor: state.selectedColor,
    theManufacturer: state.selectedManufacturer
  };
};

//which kind of actions do you want to dispatch from this container?

const mapDispatchToProps = dispatch => {
  return {
    onPageLoad: () => dispatch(actionCreators.getCars())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);
