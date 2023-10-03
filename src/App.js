import React from "react";
import { Title } from './components/Title';
import { NbCharacters } from './components/NbCharacters';
import { ListeCharacters } from './components/ListeCharacters';

const characters = require('./data/characters.json');

function App() {
  return (
    <>
      <Title></Title>
      <NbCharacters characters={characters}></NbCharacters>
      <ListeCharacters characters={characters}></ListeCharacters>
    </>
  );
}



console.log(characters)
export default App;