import { format } from "date-fns";

function CharacterDetail({ character = {} }) {
    return (
        <div>
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{format(new Date(character.modified), "MMMM d, yyyy")}</p>
        </div>
    );
}

export default CharacterDetail;
