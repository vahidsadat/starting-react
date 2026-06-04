import React from 'react';
import styled from '@emotion/styled';
import propTypes, { object } from 'prop-types';
import './App.css';
import Button from '@mui/material/Button';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button variant="contained" onClick={() => onSelect(pokemon)}>Select!</Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.shape({
      english: propTypes.string.isRequired,
    }),
    type: propTypes.arrayOf(propTypes.string.isRequired),
  }),
  onSelect: propTypes.func.isRequired,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {
        Object.keys(base).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

PokemonInfo.propTypes = {
    name: propTypes.shape({
      english: propTypes.string.isRequired,
    }),
    base: propTypes.shape({
      HP: propTypes.number.isRequired,
      Attack: propTypes.number.isRequired,
      Defense: propTypes.number.isRequired,
      "Sp. Attack": propTypes.number.isRequired,
      "Sp. Defense": propTypes.number.isRequired,
      Speed: propTypes.number.isRequired
    }),

  };

const Title = styled.h1 `
 text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function App() {
  const [ filter, filterSet] = React.useState("");
  const [ selectedItem, selectedItemSet] = React.useState(null);
  const [ pokemon, pokemonSet] = React.useState([]);

  React.useEffect(()=>{
    fetch("http://localhost:5173/starting-react/pokemon.json")
    .then((resp) => resp.json())
    .then((data) => pokemonSet(data));
  }, []);
  return (
    <Container>
      <Title>Pokemon search</Title>
      <Input value={filter} onChange={(evt) => filterSet(evt.target.value)}/>
      <TwoColumnLayout>
          <div>
          <table width= "100%">
            <thead>
              <tr>
                <th>name</th>
                <th>type</th>
              </tr>

            </thead>
            <tbody>
              {pokemon
              .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0,20)
              .map( pokemon => (
                <PokemonRow pokemon= {pokemon} key={pokemon.id} onSelect={( pokemon ) => selectedItemSet(pokemon)}/>
              ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;