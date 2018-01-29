import React from 'react';
import ProductList from './ProductList';
import LatestTimeDisplay from './LatestTimeDisplay';
import CheckoutButton from './CheckoutButton';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Basket from './Basket';

class BasketContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      basketContents: [],
      currencyCode: "",
    }
  }
  render(){
    return(
      <React.Fragment>
        <h1>basket</h1>
        <i className="material-icons">shopping_basket</i>
        <FormGroup>
        <FormControlLabel
          control={ <Switch />
        }
          label="USD"
        />
        </FormGroup>
        <LatestTimeDisplay {...this.props} />
        <ProductList {...this.props}/>
        <Basket />
        <CheckoutButton />

      </React.Fragment>
    )
  }
}

export default BasketContainer;
