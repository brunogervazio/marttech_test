import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Simple from './layouts/simple';

import Home from './pages/home';
import Checkout from './pages/checkout';
import Products from './pages/products';

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
          component={Home} 
          layout={Simple} />
        <AppRoute 
          path="/checkout" 
          component={Checkout} 
          layout={Simple} />
        <AppRoute
          path="/products" 
          component={Products} 
          layout={Simple} />
      </Switch>
    </BrowserRouter>
  )
};