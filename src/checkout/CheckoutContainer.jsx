import React from 'react';
import CurrencySelector from './CurrencySelector';

class CheckoutContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.data)
    return(
      <React.Fragment>
        <h1>checkout</h1>
        <CurrencySelector data={this.props}/>
      </React.Fragment>
    )
  }
}

export default CheckoutContainer;
