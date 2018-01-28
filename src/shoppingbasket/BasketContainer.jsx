import React from 'react';
import ProductList from './ProductList';
import LatestTimeDisplay from './LatestTimeDisplay';
import CheckoutButton from './CheckoutButton';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

class BasketContainer extends React.Component{
  constructor(props){
    super(props);
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
        <CheckoutButton />
      </React.Fragment>
    )
  }
}

export default BasketContainer;
