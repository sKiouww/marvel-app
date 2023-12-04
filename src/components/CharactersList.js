import { Link } from "react-router-dom";
import { format } from "date-fns";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <b>{character.name}</b> {' - '} {format(new Date(character.modified), "MMMM d, yyyy")}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
