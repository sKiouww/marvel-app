import React from 'react';
import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';
import RechartsRadarChart from '../components/RechartsRadarChart';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    const characters = useLoaderData();

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    const character1 = characters[option1.value];
    const character2 = characters[option2.value];

    if (!character1 || !character2) {
                    // Handle the error, e.g. return null or show an error message
        return null;
    }

    return (
        <>
            <h2>Compare characters</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CharacterDetail character={characters[option1.value]} />
                <CharacterDetail character={characters[option2.value]} />
            </div>
            <p style={centerStyle}>
                <span style={{ color: '#8884d8' }}>{characters[option1.value].name}</span> vs <span style={{ color: '#82ca9d' }}>{characters[option2.value].name}</span>
            </p>
            <div style={{flex: '50%'}}>
                    
                    <RechartsRadarChart data={[character1.capacities, character2.capacities]} />
                    
            </div>
            </div>
            
            
            
        </>
    );
};

export default CompareCharactersPage;