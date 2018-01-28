import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

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
              title={<span>Product</span>}
              subtitle={<span>cost</span>}
              actionIcon={
                <React.Fragment>
                <IconButton>
                  <Icon color="danger" style={{ fontSize: 36 }}>
                      delete
                  </Icon>
                </IconButton>
                <IconButton>
                  <Icon color="primary" style={{ fontSize: 36 }}>
                      add_circle
                  </Icon>
                </IconButton>
              </React.Fragment>
              }
            />
          </GridListTile>
          <GridListTile>
          <img src="https://image.freepik.com/free-icon/question-mark_318-52837.jpg" />
          <GridListTileBar
            title={<span>Product Name</span>}
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
