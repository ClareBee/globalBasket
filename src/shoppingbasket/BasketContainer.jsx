import React from 'react';
import ProductList from './ProductList';
import LatestTimeDisplay from './LatestTimeDisplay';
import CheckoutButton from './CheckoutButton';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

class BasketContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      basketContents: [],
      currencyCode: "",
      currencySwitch: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, checked){
    this.setState({
      currencySwitch: checked
    })
    if(!this.state.currencySwitch){
      this.props.changeCurrency("USDGBP");
    } else {
      this.props.changeCurrency("USD");
    }
  }

  render(){
    return(
      <React.Fragment>
        <i className="material-icons">shopping_basket</i>
        <FormGroup>
        <FormControlLabel
          control={ <Switch
          checked={this.state.currencySwitch}
          onChange={this.handleChange}
        />
        }
          label="GBP"
        />
        </FormGroup>
        <LatestTimeDisplay {...this.props} />
        <ProductList {...this.props}/>
        <CheckoutButton />

      </React.Fragment>
    )
  }
}

export default BasketContainer;
