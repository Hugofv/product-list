import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Product from '../Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Product} />
    </Switch>
  );
}
