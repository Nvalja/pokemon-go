import React from 'react';
import './Card.scss';

export const Card = React.memo(
  ({ name, id, types }) => {
    const ww = 1;
  
    return (
      <div className="card">
        <img
          className="card__image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={`here is a pict. of ${name}`}
        />
        <p className="card__name">{name}</p>
        {types.map(item => (
          <div
            key={item.type.url}
            className={`card__type--${item.type.name}`}
          >
            {item.type.name}
          </div>
        ))}
      </div>
    );
  },
);
