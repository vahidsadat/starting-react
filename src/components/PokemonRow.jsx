import React from "react";
import Button from '@mui/material/Button';
import PokemonType from "../PokemonTypes";

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr >
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;