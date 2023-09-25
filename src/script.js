// fetch the data from the server
fetch("./../characters.json")
    .then((response) => {
    console.log(response);
    return response.json();
    })
    .then((characters) => {
        console.log(characters);
        let ul = document.createElement('ul');
        document.querySelector("h1").after(ul);
        characters.forEach((character) => {
            console.log(character);
            let li = docuùent.createElement('li');
            li.innerText = character.name
            ul.append(li);
        });
        let h2=document.createElement('h2');
        h2.innerText = 'Nombre de characters : ${characters.length}'
    }
    )
