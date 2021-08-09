import React from 'react'
import Picture from '../../images/Left.png'

const SearchForm = () => {
    return (
      <div className='searchForm'>
          <div className="rickMorty">
              <img src={Picture} alt="Rick and Morty" />
          </div>
          <div className="formWrapper">
              <form className="formContent">
                <p>Search for characters</p>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name*' />
                <div className="formContent-option">
                  <label htmlFor="status">Status</label>
                  <select>
                    <option value='Status' hidden>Status</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                  </select>
                </div>
                <div className="formContent-option">
                  <label htmlFor="gender">Gender</label>
                  <select>
                    <option value='Gender' default hidden>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                </div>
                <button type='submit'>Search</button>
              </form>
          </div>
      </div>
    );
};

export default SearchForm;