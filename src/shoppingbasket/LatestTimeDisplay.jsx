import React from 'react';

class LatestTimeDisplay extends React.Component{
  render(){
    console.log(this.props.data.currencyquotes.timestamp);
    let timeUnix = this.props.data.currencyquotes.timestamp;
    let formattedTime = timeUnix;
    return(
      <React.Fragment>
        <h2>Rates last updated:{formattedTime}</h2>
      </React.Fragment>
    )
  }
}

export default LatestTimeDisplay;
