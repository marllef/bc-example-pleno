import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DetailsPage } from '../pages/Details';
import { ProductPage } from '../pages/Products';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductPage} />
        <Route exact path="/:id" component={DetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}
