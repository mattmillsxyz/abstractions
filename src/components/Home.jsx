import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.scss';
import GitHubCorner from './GithubCorner';

const Home = () => {
  return (
    <div className="home">
      <GitHubCorner />
      <h1>ABSTRACTIONS</h1>
      <p className="description-text">
        ABSTRACTIONS is a proof of concept application for displaying and
        modifying SVG designs. It is currently a work in progress.
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
