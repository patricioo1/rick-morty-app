import React from 'react'
import { useHistory } from 'react-router-dom';
import ParameterInfo from '../ParameterInfo/ParameterInfo';

const CardsResults = ({ characters, onPrevClick, onNextClick, name, status, gender }) => {

    let history = useHistory();
    const backToSearchForm = () => {
        history.push('/')
    }

    return (
        <>
            <div className="results-options">
                <div className="results-options__wrapper">
                    <div className="results-options__back">
                    <button onClick={() => {backToSearchForm()}}><span className="fas fa-arrow-left"></span></button>
                    <p>Search results</p>
                    </div>
                    <div className="results-options__properties">
                    <span>Options:</span>
                    <ParameterInfo parameterName={'Name'} value={name} />
                    <ParameterInfo parameterName={'Status'} value={status} />
                    <ParameterInfo parameterName={'Gender'} value={gender} />
                    </div>
                </div>
                <div className="results-card">
                    <div className="results-card__properties">
                        <p>Photo</p>
                        <p>Name</p>
                        <p>Gender</p>
                        <p>Status</p>
                        <p>Location</p>
                    </div>
                        {characters.map((character, index) => {
                            return (
                    <div key={index} className="results-card__characters">
                        <div className='results-card__characters-photo'>
                            <img src={character.image} alt={`${character.name} Avatar`} />
                        </div>
                        <p>{character.name}</p>
                        <p>{character.gender}</p>
                        <p>{character.status}</p>
                        <p>{character.location.name}</p>
                    </div>
                        )
                        })}
                        <div className="results-card__buttons">
                            {onPrevClick && <button value='prev' onClick={onPrevClick} className='prev'>Previous</button>}
                            <div className="results-card__button-separator"></div>
                            {onNextClick && <button value='next' onClick={onNextClick} className='next'>Next</button>}
                        </div>
                </div>
            </div>
        </>
    );
};

export default CardsResults;