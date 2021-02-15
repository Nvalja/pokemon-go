import React, { useEffect, useState } from 'react';
import './App.scss';
import { getDate } from './api/api';
import { CardsList } from './components/CardsList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    loadDate();
    setLoader(true);
  }, [count]);

  const onload = () => {
    setCount(count + 1);
  };

  const loadDate = async() => {
    const dataFromServer = await getDate(count);
    
    setLoader(false);
    setPokemons([
      ...pokemons,
      ...dataFromServer,
    ]);
  };

  // eslint-disable-next-line no-console
  console.log(count);

  return (
    <div className="App">
      <CardsList
        pokemonsList={pokemons}
        onLoadButton={onload}
        isLoading={loader}
      />
    </div>
  );
}

export default App;
