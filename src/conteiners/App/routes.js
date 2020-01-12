import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../Categories';
import GiftListCategory from '../GiftListCategory';
import GiftList from '../GiftList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categories} />
      <Route
        path="/gift-list-category/:categoryId"
        component={GiftListCategory}
      />
      <Route path="/gift-list/:id" component={GiftList} />
    </Switch>
  );
}
