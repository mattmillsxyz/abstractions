import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import '../styles/App.scss';
import Home from './Home';
import Canvas from './Canvas';
import GAListener from './GAListener';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <GAListener>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/canvas/:design?/:palette?/:direction?"
            exact
            component={Canvas}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </GAListener>
    </Router>
  );
};

export default App;
