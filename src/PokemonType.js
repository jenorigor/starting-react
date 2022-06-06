import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
});

export default PokemonType;