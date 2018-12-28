import React from 'react';

import '../styles/App.scss';
import Header from './Header';
import Menu from './Menu';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
    </div>
  );
};

export default App;
