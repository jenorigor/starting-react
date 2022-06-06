import React, {useState, useEffect, useReducer} from "react";
import './App.css';
import PokemonType from './PokemonType';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonInfo from './components/PokemonInfo';
import PokemonContext from './PokemonContext';
import "antd/dist/antd.css";

const pokemonReducer = (state, action) => {
  switch( action.type ) {
    case 'SET_FILTER': 
      return { 
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON': 
      return { 
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON': 
      return { 
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error( 'No action' );
  }
};

function App() {
  const [state,dispatch] = useReducer( pokemonReducer, {
    pokemon: [ ],
    filter: '',
    selectedItem: null
  } );

  useEffect( ( ) => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
    .then( resp => resp.json( ) )
    .then((data) => dispatch({
      type: 'SET_POKEMON',
      payload: data
    }));
  }, [ ] );



  return (
    <PokemonContext.Provider
    value={{
      state,
      dispatch
    }}
    >
      <div
        style={{
          margin: 'auto',
          width: 800,
          paddingTop: "1rem",
        }}
      >
        <h1 className="title"> Pokemon Search </h1>
        <PokemonFilter />
        <PokemonTable />
        <PokemonInfo/>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
