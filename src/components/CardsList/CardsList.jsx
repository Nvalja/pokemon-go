import React from 'react';
import './CardsList.scss';
import { Card } from '../Card';
import { Loader } from '../Loader';

export const CardsList = ({ pokemonsList, onLoadButton, isLoading }) => {
  const fdf = 1;

  return (
    <div className="cards">
      <div className="cards__list">
        {pokemonsList.map(pokemon => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.type}
          />
        ))}
      </div>
      <button
        className="cards__button"
        type="button"
        onClick={onLoadButton}
      >
        {isLoading
          ? <Loader />
          : 'Load More'
        }
      </button>
    </div>
    
  );
};
