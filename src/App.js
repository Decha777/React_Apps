import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home ,Error} from './pages';
import * as ROUTES from './constants/routes';


export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route path='*' >
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
