import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CreateProduct } from './pages/CreateProduct';
import { ListProduct } from './pages/ListProducts';

export const Routes = () => {

  return (
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/register" component={Register} />
      <Route path="/create-product" component={CreateProduct} />
      <Route path="/list-product" component={ListProduct} />
      <Route component={() => <div>Page 404!</div>}  />
    </Switch>
  )
}
