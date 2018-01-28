import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import BasketContainer from './shoppingbasket/BasketContainer';
import CheckoutContainer from './checkout/CheckoutContainer';

class Router extends React.Component {
  render(){
    console.log(this.props);
    return(
      <BrowserRouter>
        <React.Fragment>
        <Route exact path="/basket" render={props => <BasketContainer {...props} data={this.props.data} products={this.props.products}/>} />
        <Route path="/checkout" render={props => <CheckoutContainer {...props} data={this.props.data} products={this.props.products}/>} />
      </React.Fragment>
      </BrowserRouter>
    )
  }
}
export default Router;
