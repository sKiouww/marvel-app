function ListeCharacters({characters}){
    if (characters.length === 0) {
    return <div>Liste des personnages est vide</div>;
    }

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