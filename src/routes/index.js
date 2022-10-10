import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/exemple" component={() => <div>exemple</div>} /> */}
      </Switch>
    </BrowserRouter>
  );
}
