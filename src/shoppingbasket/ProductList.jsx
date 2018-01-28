import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card from 'material-ui/Card';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';

class ProductList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <h1>Product list</h1>
        <div>
          <GridList container spacing={24}>
            <GridListTile item xs={12}>
                <Card>Product</Card>
            </GridListTile>
            <GridListTile>
            <img src="" />
            <GridListTileBar
              productName="something"
              subtitle={<span>cost</span>}
              actionIcon={
                <IconButton>
                  <i className="material-icons">info_outline</i>
                </IconButton>
              }
            />
          </GridListTile>
          </GridList>
        </div>
      </React.Fragment>
    )
  }
}
export default ProductList;
