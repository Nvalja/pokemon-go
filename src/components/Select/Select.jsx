import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import { getTypes } from '../../api/api';

export const Select = ({ onSelect }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    loadTypes();
  }, []);

  const loadTypes = async() => {
    const loadedTypes = await getTypes();

    setTypes(loadedTypes);
  };

  return (
    <select
      className="select"
      onChange={onSelect}
    >
      <option value="all">all</option>
      {types.map(type => (
        <option
          value={type.name}
          key={type.url}
        >
          {type.name}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
