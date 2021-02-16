import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SelectedCard.scss';
import { getPokemon } from '../../api/api';

export const SelectedCard = React.memo(
  ({ pokemonId, onClose }) => {
    const [pokemon, setPokemon] = useState([]);
  
    useEffect(() => {
      loadPokemonById();
    }, [pokemonId]);
  
    const loadPokemonById = async() => {
      const loadetPokemon = await getPokemon(pokemonId);
      const pokemonInfo = {
        type: loadetPokemon.types[0].type.name[0].toUpperCase()
          + loadetPokemon.types[0].type.name.slice(1),
        name: loadetPokemon.name[0].toUpperCase()
          + loadetPokemon.name.slice(1),
        id: String(loadetPokemon.id / 100).replace('.', ''),
        attack: loadetPokemon.stats[1].base_stat,
        defense: loadetPokemon.stats[2].base_stat,
        hp: loadetPokemon.stats[0].base_stat,
        spAttack: loadetPokemon.stats[3].base_stat,
        spDefense: loadetPokemon.stats[4].base_stat,
        speed: loadetPokemon.stats[5].base_stat,
        weight: loadetPokemon.weight,
        totalMoves: loadetPokemon.moves.length,
      };

      setPokemon(pokemonId, 'sss');
    };
  
    return (
      <div
        className="selectedCard"
        onClick={onClose}
        role="button"
        onKeyPress={onClose}
        tabIndex="0"
      >
        <img
          className="selectedCard__image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
          alt="pokemon's foto"
        />
        <h2 className="selectedCard__name">
          {`${pokemon.name} #${pokemon.id}`}
        </h2>
        <table
          cellSpacing="0"
          className="selectedCard__description"
        >
          <tr>
            <td className="selectedCard__description--columnL">Type</td>
            <td className="selectedCard__description--column">
              {pokemon.type}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">Attack</td>
            <td className="selectedCard__description--column">
              {pokemon.attack}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">Defense</td>
            <td className="selectedCard__description--column">
              {pokemon.defense}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">HP</td>
            <td className="selectedCard__description--column">
              {pokemon.hp}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">SP attack</td>
            <td className="selectedCard__description--column">
              {pokemon.spAttack}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">SP defense</td>
            <td className="selectedCard__description--column">
              {pokemon.spDefense}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">Speed</td>
            <td className="selectedCard__description--column">
              {pokemon.speed}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">Weight</td>
            <td className="selectedCard__description--column">
              {pokemon.weight}
            </td>
          </tr>
          <tr>
            <td className="selectedCard__description--columnL">Total moves</td>
            <td className="selectedCard__description--column">
              {pokemon.totalMoves}
            </td>
          </tr>
        </table>
      </div>
    );
  },
);

SelectedCard.propTypes = {
  pokemonId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
