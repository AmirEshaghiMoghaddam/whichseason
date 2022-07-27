import React from 'react';

const Loading = (props) => {
     return (
          <div className='ui active dimmer'>
               <div className='ui text loader'>{props.message}</div>
          </div >
     );
}

// if we forget to pass a props to Loading component, it gets default props
Loading.defaultProps = {
     message: 'Loading ...'
};

export default Loading;