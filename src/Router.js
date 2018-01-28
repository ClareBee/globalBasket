import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import BasketContainer from './shoppingbasket/BasketContainer';
import CheckoutContainer from './checkout/CheckoutContainer';

class Router extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
        <Route exact path="/basket" component={BasketContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
      </React.Fragment>
      </BrowserRouter>
    )
  }
}
export default Router;
