import React from 'react';
import Filter from './Filter';
import Cars from './Cars';

const Home = () => {
  return (
    <div className="Home">
      <Filter />
      <div>
        <div className="available">All the available cars</div>
        <Cars />
      </div>
    </div>
  );
};

export default Home;
