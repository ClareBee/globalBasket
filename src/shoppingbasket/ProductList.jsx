import React from 'react';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Basket from './Basket';
import Product from './Product'



class ProductList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let products = this.props.products;
    let display = products.map((product, index) => {
      return <GridListTile>
        <img src={product.image} />
        <GridListTileBar
          title={<span>{product.name}</span>}
          subtitle={<span>{product.price}</span>}
          actionIcon={
            <IconButton>
              <Icon color="primary" style={{ fontSize: 36 }}>
                add_circle
              </Icon>
            </IconButton>
          }
        />
      </GridListTile>
    })

    console.log(this.props)
    return(
      <React.Fragment>
        <h1>Product list</h1>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <GridList cols={2} cellHeight={250}>

                {display}

        </GridList>
      </Grid>
      <Grid item xs={4}>
        <Basket />
      </Grid>
    </Grid>
      </React.Fragment>
    )
  }
}
export default ProductList;
