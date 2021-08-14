import React from 'react'
import { useHistory } from 'react-router-dom';

const Error = () => {
  let history = useHistory();

  const goToMainPage = () => {
    history.push('/')
  }

    return (
      <div className='results-errormessage'>
        <p>There was an error or the character you are looking for is missing. Please try again.</p>
        <button onClick={goToMainPage}>Try again</button>
      </div>
    );
};

export default Error;