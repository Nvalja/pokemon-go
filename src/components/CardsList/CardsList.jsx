import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardsList.scss';
import { Card } from '../Card';
import { Loader } from '../Loader';
import { SelectedCard } from '../SelectedCard';

export const CardsList = ({ pokemonsList, onLoadButton, isLoading }) => {
  const [pokemonId, setPokemonId] = useState(null);

  const handleCardId = (cardId) => {
    if (pokemonId === cardId) {
      setPokemonId(null);

      return;
    }

    setPokemonId(cardId);
  };

  const outSelect = () => {
    setPokemonId(null);
  };

  return (
    <div className="cards">
      {pokemonId
      && <SelectedCard pokemonId={pokemonId} onClose={outSelect} />}
      <div className="cards__list">
        {pokemonsList.map(pokemon => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.type}
            detCardId={handleCardId}
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

CardsList.propTyped = {
  pokemonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadButton: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
