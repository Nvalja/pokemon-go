
import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = React.memo(
  ({ name, id, types, detCardId }) => (
    <div
      className="card"
      onClick={() => detCardId(id)}
      onKeyPress={() => detCardId(id)}
      role="button"
      tabIndex="0"
    >
      <img
        className="card__image"
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={`a pict. ${name}`}
      />
      <p className="card__name">{name[0].toUpperCase() + name.slice(1)}</p>
      <div className="card__types">
        {types.map(item => (
          <div
            key={item.type.url}
            className={`card__type card__type--${item.type.name}`}
          >
            {item.type.name[0].toUpperCase() + item.type.name.slice(1)}
          </div>
        ))}
      </div>
      
    </div>
  ),
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  detCardId: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
