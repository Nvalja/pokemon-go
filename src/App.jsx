import React, { useEffect, useState, useMemo } from 'react';
import './App.scss';
import { getDate } from './api/api';
import { CardsList } from './components/CardsList';
import { Select } from './components/Select';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [select, setSelect] = useState('all');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    loadDate();
    setLoader(true);
  }, [count]);

  const onload = () => {
    setCount(count + 1);
    setIsSelected(false);
  };

  const loadDate = async() => {
    const dataFromServer = await getDate(count);

    setLoader(false);
    setPokemons([
      ...pokemons,
      ...dataFromServer,
    ]);
  };

  const handleSelect = ({ target }) => {
    setIsSelected(true);
    setSelect(target.value);
  };

  const sortedPokemons = useMemo(() => {
    if (select === 'all') {
      return pokemons;
    }

    return pokemons.filter(pokemon => (
      pokemon.type.some(item => item.type.name === select)
    ));
  }, [select]);

  return (
    <div className="App">
      <h1 className="App__title">Pokedex</h1>
      <Select onSelect={handleSelect} />
      <div className="App__main">
        <CardsList
          pokemonsList={!isSelected ? pokemons : sortedPokemons}
          onLoadButton={onload}
          isLoading={loader}
        />
        <div className="App__leftFild" />
      </div>
    </div>
  );
}

export default App;
