import React from 'react';
import LatestTimeDisplay from './LatestTimeDisplay';
import CheckoutButton from './CheckoutButton';

class BasketContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <h1>basket</h1>
        <LatestTimeDisplay {...this.props} />
        <CheckoutButton />
      </React.Fragment>
    )
  }
}

export default BasketContainer;
