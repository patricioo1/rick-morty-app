import React from 'react'
import Picture from '../../images/Left.png'

const SearchResults = () => {
    return (
      <div className='searchResults'>
          <div className="rickMorty">
            <img src={Picture} alt="Rick and Morty" />
          </div>

      </div>
    );
};

export default SearchResults;