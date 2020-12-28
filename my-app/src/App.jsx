import React, { useState } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { RandomRecipe } from "./components/RandomRecipe";
import { RandomFullRecipe } from "./components/RandomFullRecipe";

const App = () => {
  const [getRandomRecipe, setGetRandomRecipe] = useState(false);
  const [getRandomFullRecipe, setGetRandomFullRecipe] = useState(false);

  return (
    <>
      <Header
        setGetRandomRecipe={setGetRandomRecipe}
        setGetRandomFullRecipe={setGetRandomFullRecipe}
      />
      <Banner />
      <RandomFullRecipe getRandomFullRecipe={getRandomFullRecipe} />
      <RandomRecipe getRandomRecipe={getRandomRecipe} />
    </>
  );
};

export default App;
