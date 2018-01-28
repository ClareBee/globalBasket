import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import BasketContainer from './shoppingbasket/BasketContainer';
import CheckoutContainer from './checkout/CheckoutContainer';

class Router extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={BasketContainer} />
        <Route path="/checkout" component={CheckoutContainer} />

      </BrowserRouter>
    )
  }
}
export default Router;
