import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
