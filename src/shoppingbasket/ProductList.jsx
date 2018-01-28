import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card from 'material-ui/Card';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

class ProductList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <h1>Product list</h1>
        <div>
          <GridList container cellHeight={250}>

            <GridListTile>
            <img src="https://image.freepik.com/free-icon/question-mark_318-52837.jpg" />
            <GridListTileBar
              productName="something"
              subtitle={<span>cost</span>}
              actionIcon={
                <IconButton>
                  <Icon color="primary" style={{ fontSize: 36 }}>
                      add_circle
                  </Icon>
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
          <img src="https://image.freepik.com/free-icon/question-mark_318-52837.jpg" />
          <GridListTileBar
            productName="something"
            subtitle={<span>cost</span>}
            actionIcon={
              <IconButton>
                <Icon color="primary" style={{ fontSize: 36 }}>
                    add_circle
                </Icon>
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
