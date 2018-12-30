import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>ABSTRACTIONS</h1>
      <p className="description-text">
        This project is currently a work in progress.
        <br />
        Please ignore any weirdness or non-functionality.
      </p>
      <Link className="cta-button" to="/canvas">
        Try It
      </Link>
      <footer className="footer">
        A creative coding project by{' '}
        <a href="https://mattmills.xyz">Matt Mills</a>.
      </footer>
    </div>
  );
};

export default Home;
