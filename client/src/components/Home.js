import React from 'react';
import Filter from './Filter';
import Cars from './Cars';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const sortOptions = ['None', 'Mileage - Ascending', 'Mileage - Descending'];

const Home = props => {
  return (
    <div className="Home">
      <Filter />
      <div className="home-right">
        <div className="available">
          <div className="available-left">
            <h1 className="available-title">Available cars</h1>
            <p>Showing 10 of 100 results</p>
          </div>
          <div className="available-right">
            <p className="sort">Sort by</p>
            <Dropdown
              className="dropdown-sort"
              options={sortOptions}
              onChange={sort => props.onSortSelect(sort)}
              placeholder="None"
            />
          </div>
        </div>
        <Cars />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSortSelect: sort => dispatch(actionCreators.sortMileage(sort))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
