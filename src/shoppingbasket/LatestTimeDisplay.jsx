import React from 'react';
import moment from 'moment';

class LatestTimeDisplay extends React.Component{
  render(){
    console.log(this.props.data.currencyquotes.timestamp);
    let timeUnix = this.props.data.currencyquotes.timestamp;
    let formattedTime = moment.unix(timeUnix).format('MMMM Do YYYY, h:mm:ss a');
    return(
      <React.Fragment>
        <h2>Rates last updated: {formattedTime}</h2>
      </React.Fragment>
    )
  }
}

export default LatestTimeDisplay;
