import React from "react";
import Title from './components/Title';
import NbCharacters from './components/NbCharacters';
import ListeCharacters from './components/ListeCharacters';
import Image from './components/Image';

const characters = require('./data/characters.json');

function App() {
  return (
    <>
      <Title></Title>
      <NbCharacters characters={characters}></NbCharacters>
      <ListeCharacters characters={characters}></ListeCharacters>
      <Image character={characters[0]}></Image>
    </>
  );
}

export default App; 

/* import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); */