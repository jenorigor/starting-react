import React from "react";
import {Button} from 'antd';

const PokemonRow = ( { pokemon, onSelect } ) => (
  <tr >
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join( ', ')}</td>
    <td><Button type="primary" onClick={ ( ) => onSelect(pokemon)} >Select</Button></td>
  </tr>
);

export default PokemonRow;