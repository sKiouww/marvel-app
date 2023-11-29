# Marvel App

## Installation

Récupérer le projet en locl et installer les dépendances
```
git clone url-du-projet
cd marvel-app
npm install
```

## Lancement

```
npm start
```
L'application est accessible à l'adresse http://localhost:3000

## Test

Execution des tests unitaires en mode wtach, c'est à dire que les tests sont relancés à chaque modification de code.
```
npm test
```
Execution des tests uniquement une fois avec un rapport détaillé de la couverture de code
```
npm run test:coverage
```

## Conception

Le projet est composé de 4 pages : 
- Home (page d'accueil) : Liste des personnages
- Character : Page de détail d'un personnage
- About : Page d'information sur l'application
- Contact : Page de contact

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```