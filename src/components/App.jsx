import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Canvas from './Canvas';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Canvas" exact component={Canvas} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
