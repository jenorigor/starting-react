import React, { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const PokemonInfo = () => {
  const {selectedItem } = useContext( PokemonContext );
  return selectedItem ? (
   	<div>
	   <h1>{selectedItem.name.english}</h1>
	</div>
  ) : null;
}

export default PokemonInfo;