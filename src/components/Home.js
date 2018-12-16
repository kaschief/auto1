import React from 'react';
import Filter from './Filter';
import Cars from './Cars';

const Home = () => {
  return (
    <div className="Home">
      <Filter />
      <div className="home-right">
        <div className="available">
          <p>Available Cards</p>
          <p>Number of the Pages</p>
          <p>Sort By</p>
          <p>Sort By Box</p>
        </div>
        <Cars />
      </div>
    </div>
  );
};

export default Home;
