import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom'
import { format } from 'date-fns';

describe('CharactersList', () => {

    it('renders a list of characters', () => {
        // when
        const characters = [
            { id: 1, name: 'Iron Man', modified: "2013-01-13T14:48:32-0500" },
            { id: 2, name: 'Captain America', modified: "2020-04-04T19:02:15-0400"},
            { id: 3, name: 'Thor', modified: "2013-10-17T15:01:37-0400"},
        ];

        // then
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect a listitem for each character
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);

        // expect each listitem to have the character name and a link to the character detail page
        characterItems.forEach((item, index) => {
            // expect each listitem to have the character name
            expect(item).toHaveTextContent(characters[index].name);

            // test pour chaque character si la date correspond bien
            expect(item).toHaveTextContent(format(new Date(characters[index].modified), "MMMM d, yyyy"));

            // expect each listitem to have a link to the character detail page
            const link = screen.getByRole('link', { name: characters[index].name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/characters/${characters[index].id}`);
        });

    });

    it('renders an empty list when no characters are provided', () => {
        // when

        // then
        render(<CharactersList />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect no listitems
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });

});
