import React from 'react';
import Filter from './Filter';
import Cars from './Cars';

const Home = () => {
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
            <p className="sort">Sort By</p>
            <span className="box">Sort By Boooooooooooooooooox</span>
          </div>
        </div>
        <Cars />
      </div>
    </div>
  );
};

export default Home;
