import React, {useState, useEffect} from "react";
import './App.css';
import PropTypes from "prop-types";

const PokemonRow = ( { pokemon, onSelect } ) => (
  <tr >
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join( ', ')}</td>
    <td><button onClick={ ( ) => onSelect(pokemon)} >Select</button></td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {
  const [filter,filterSet] = useState( '' );
  const [selectedItem, selectItem] = useState( null );
  const [pokemon, pokemonSet] = useState( [ ] );

  useEffect( ( ) => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
    .then( resp => resp.json( ) )
    .then((data) => pokemonSet(data));
  }, [ ] );

  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title"> Pokemon Search </h1>
      <input value={filter} onChange={ (evt) => filterSet( evt.target.value )} />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.filter( (pokemon) => pokemon.name.english.toLowerCase( ).includes(filter.toLowerCase( )) ).slice( 0, 20 ).map( ( pokemon ) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={ (pokemon) => selectItem(pokemon) }/>
          ) )}
        </tbody>
      </table>
      {selectedItem && ( 
        <div>
          <h1>{selectedItem.name.english}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
