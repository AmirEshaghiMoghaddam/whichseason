import React from 'react';

const findSeason = (lat, month) => {
     if (month > 2 && month < 9) {
          return lat > 0 ? 'Summer' : 'Winter';
     } else {
          lat > 0 ? 'Winter' : 'Summer';
     }
};


const SeasonDisplay = props => {

     const season = findSeason(props.lat, new Date().getMonth());

     return (<div>Season in your location is: {season}</div>);
};

export default SeasonDisplay;
