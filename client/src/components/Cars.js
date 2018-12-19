import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const Cars = props => {
  console.log('PROPS TO CARS', props);
  return (
    <div className="Cars">
      <h1>HELLO</h1>
      {props.theColor && <p>{props.theColor} was selected</p>}
      {props.theManufacturer && <p>the Manu is {props.theManufacturer}</p>}
      {props.theCars.map(car => {
        return <div>{car}</div>;
      })}

      {/* {this.state.cars.map
        ? this.state.cars.map(c => {
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
        : null} */}
    </div>
  );
};

//which (slice of the) state do you want to get?

const mapStateToProps = state => {
  return {
    theCars: state.cars,
    theColor: state.selectedColor,
    theManufacturer: state.selectedManufacturer
  };
};

//which kind of actions do you want to dispatch from this container?

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default connect(
  mapStateToProps,
  null
)(Cars);
