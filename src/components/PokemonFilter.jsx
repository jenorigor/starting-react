import React, { useContext } from 'react';
import PokemonContext from '../PokemonContext';
import {Input} from 'antd';

const PokemonFilter = ( ) => {
  const { state: { filter,filterSet }, dispatch }  = useContext( PokemonContext );

  return (
    <Input value={filter} onChange={ (evt) => dispatch( { type: 'SET_FILTER', payload: evt.target.value } ) } />
  )
}

export default PokemonFilter;