import React from 'react';
import moment from 'moment';

class LatestTimeDisplay extends React.Component{

  render(){
    let formattedTime = "";
    if(this.props){
     let timeUnix = this.props.time;
     formattedTime = moment.unix(timeUnix).format('MMMM Do YYYY, h:mm:ss a');
    }
    return(
      <React.Fragment>
        <h1>Time</h1>
        <h2>Rates last updated: {formattedTime}</h2>
      </React.Fragment>
    )
  }
}

export default LatestTimeDisplay;
