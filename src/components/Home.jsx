import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <p>
        <Link to="/canvas">Try It</Link>
      </p>
    </div>
  );
};

export default Home;
