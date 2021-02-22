import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppBar from './layouts/appBar';

import Checkout from './pages/checkout';
import Products from './pages/products';
import Shoppings from './pages/shoppings';

function AppRoute({component: Component, layout: Layout, ...rest}){
  return(
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
};

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <AppRoute
          exact 
          path="/" 
          component={Products} 
          layout={AppBar} />
        <AppRoute
          path="/products" 
          component={Products} 
          layout={AppBar} />
        <AppRoute 
          path="/checkout" 
          component={Checkout} 
          layout={AppBar} />
        <AppRoute 
          path="/shoppings" 
          component={Shoppings} 
          layout={AppBar} />
      </Switch>
    </BrowserRouter>
  )
};