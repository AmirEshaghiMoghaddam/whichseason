import React from 'react';
import './SeasonDisplay.css';

const findSeason = (lat, month) => {
     if (month > 2 && month < 9) {
          return lat > 0 ? 'Summer' : 'Winter';
     } else {
          lat > 0 ? 'Winter' : 'Summer';
     }
};


const SeasonDisplay = props => {

     const season = findSeason(props.lat, new Date().getMonth());
     const text = season === 'Winter' ? "It's Winter, Burr, it's chilly" : "It's Summer, Let's hit the beach";
     const icon = season === 'Winter' ? 'snowflake' : 'sun';

     return (<div className={`season-display ${season}`}>
          <i className={`${icon} massive icon-left icon`} />
          <h1>{text}</h1>
          <i className={`${icon} massive icon-right icon`} />
     </div >);
};

export default SeasonDisplay;
