import React from 'react';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Basket from './Basket';
import Product from './Product'

const styles = {
  photo: {
    height: "inherit",
    padding:"5px",
    margin: "5px"
  }
}

class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedProducts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index){
    console.log(index)
    let chosenProduct = index;
    let chosenProducts = this.state.selectedProducts;
    chosenProducts.push(chosenProduct);
    this.props.handleProducts(chosenProducts);
    this.setState({
      selectedProducts: chosenProducts
    })
    console.log(chosenProducts)
  }
  render(){
    let products = this.props.products;
    console.log(this.props);

    let display = products.map((product, index) => {

      return  <GridListTile key={index} value={index} style={{boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)"}}>
                <img style={styles.photo} src={product.image} />
                <GridListTileBar
                  data-txt={product}
                  onClick={(e) => this.handleClick(e, index)}

                  value={index}
                  title={<span>{product.name}</span>}
                  subtitle={<span>{this.props.data.baseCurrency === "USDGBP" ? "£" : "$" }
                  {this.props.data.baseCurrency === "USDGBP" ? (product.price * this.props.data.baseCurrencyRate).toFixed(2) : product.price.toFixed(2)}</span>}
                  actionIcon={
                <IconButton  value={index} >
                  <Icon  color="primary" style={{ fontSize: 36 }} value={index}>
                    add_circle
                  </Icon>
                </IconButton>
                }

                />
              </GridListTile>
    });

    return(

          <Grid item xs={8}>
            <GridList cols={2} cellHeight={250} style={{boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)"}}>

              {display}

            </GridList>
          </Grid>

    )
  }
}
export default ProductList;
