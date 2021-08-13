import React, { useEffect, useState } from 'react'
import CardsResults from './CardsResults/CardsResults';
import Loading from './Events/Loading';
import { useQuery } from './useQuery/useQuery';
import Error from './Events/Error';
import { getQueryParameters } from '../../Utils/getQueryParameters';
import { useHistory } from 'react-router-dom';


const SearchResults = () => {
  let query = useQuery();
  const name = query.get('name');
  const status = query.get('status');
  const gender = query.get('gender');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [dataURL, setDataURL] = useState(`https://rickandmortyapi.com/api/character${getQueryParameters(name, status, gender)}`);

  let history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push('/')
    }
  }, [history, name])

  const handleNextClick = () => {
    setDataURL(info.next)
  }

  const handlePrevClick = () => {
    setDataURL(info.prev)
  }

  useEffect(() => {
    try {
      fetch(dataURL)
      .then(res => res.json())
      .then(({results, info}) => {
        if (Array.isArray(results)) {
          console.log(info);
          setCharacters(results)
          setInfo(info)
        } else {
          setCharacters([])
          setError(true)
        }
      })}
        catch(error) {
          setError(error);
        }
        finally {
          setLoading(false)
        }
  }, [dataURL])

    if (error) {
      return (
        <>
          <Error />
        </>
      )
    } else {
      return (
        <>
          {loading ? <Loading /> : <CardsResults characters={characters} onNextClick={info.next ? handleNextClick : null} onPrevClick={info.prev ? handlePrevClick : null} name={name} status={status} gender={gender} />}
        </>
      );
  }
};

export default SearchResults;