import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Product from './Components/Product/Product';
import { CreateProduct } from './Components/CreateProduct/CreateProduct';

export const Routes = () => {

  return (
    <Switch>
      <Route path="/" component={CreateProduct} exact/>
      <Route path="/product" component={Product} />
      <Route component={() => <div>Page 404!</div>}  />
    </Switch>
  )
}
