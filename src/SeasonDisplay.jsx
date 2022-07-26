import React from 'react';
// import { Icon } from 'semantic-ui-react';

const findSeason = (lat, month) => {
     if (month > 2 && month < 9) {
          return lat > 0 ? 'Summer' : 'Winter';
     } else {
          lat > 0 ? 'Winter' : 'Summer';
     }
};


const SeasonDisplay = props => {

     const season = findSeason(props.lat, new Date().getMonth());
     const text = season === 'Winter' ? "It's Winter, Burr, it's chilly" : "It's Summer, Lets hit the beach";
     const icon = season === 'Winter' ? 'snowflake' : 'sun';

     return (<div>
          <i className={`${icon} massive icon`} />
          <h1>{text}</h1>
          <i className={`${icon} massive icon`} />
     </div >);
};

export default SeasonDisplay;
