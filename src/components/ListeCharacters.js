function ListeCharacters({characters}){
    const characterList = characters.map((character, index) => (
      <li key={index}>{character.name}</li>
    ));
    return (
      <div>
        <h3>Liste des personnages :</h3>
        <ul>{characterList}</ul>
      </div>
    );
  }

export default ListeCharacters;