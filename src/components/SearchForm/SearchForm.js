import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getQueryParameters } from '../../Utils/getQueryParameters';

const SearchForm = () => {
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();

  let history = useHistory();

  const goToResults = () => {
    history.push(`/results${getQueryParameters(name, status, gender)}`)
  }

  const handleNameChange = (e) => {
    setName(e.target.value.trim());
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value);
  }

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={goToResults} className="form-content">
          <p>Search for characters</p>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name*' required onInput={handleNameChange} />
          <div className="form-content__option">
            <label htmlFor="status">Status</label>
            <select onChange={handleStatus} >
              <option value='Status' hidden>Status</option>
              <option value='Alive'>Alive</option>
              <option value='Dead'>Dead</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </div>
          <div className="form-content__option">
            <label htmlFor="gender">Gender</label>
            <select onChange={handleGender} >
              <option value='Gender' hidden>Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Genderless'>Genderless</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </div>
          <button type='submit'>Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;