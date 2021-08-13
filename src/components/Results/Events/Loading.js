import React from 'react'
import Spinner from 'react-spinkit'

const Loading = () => {
    return (
      <div className='results-spinnercontainer'>
          <Spinner name='ball-scale-multiple' style={{color: '#33BD7D'}}/>
      </div>
    );
};

export default Loading;