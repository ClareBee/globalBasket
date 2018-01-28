import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import BasketContainer from './shoppingbasket/BasketContainer';
import CheckoutContainer from './checkout/CheckoutContainer';

class Router extends React.Component {
  render(){
    console.log(this.props.data);
    return(
      <BrowserRouter>
        <React.Fragment>
        <Route exact path="/basket" render={props => <BasketContainer {...props} data={this.props.data}/>} />
        <Route path="/checkout" render={props => <CheckoutContainer {...props} data={this.props.data} />} />
      </React.Fragment>
      </BrowserRouter>
    )
  }
}
export default Router;
