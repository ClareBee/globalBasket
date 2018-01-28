import React from 'react';
import CurrencySelector from './CurrencySelector';

class CheckoutContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chosenCurrency: ""
    }
    this.handleChosenCurrency = this.handleChosenCurrency.bind(this);
  }

  handleChosenCurrency(code){
    //get chosen currency from selector
    //compare against list of currencies
  this.setState({chosenCurrency: code});
  }
  render(){
    console.log(this.props.data)
    return(
      <React.Fragment>
        <h1>checkout</h1>
        <CurrencySelector onSelect={this.handleChosenCurrency} data={this.props.data}/>
      </React.Fragment>
    )
  }
}

export default CheckoutContainer;
