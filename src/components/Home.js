import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Cars from './Cars';

const Home = () => {
  return (
    <div className="Home">
      {/* <h1>The Home Page</h1> */}
      <Filter />
      <Cars />
    </div>
  );
};

export default Home;
