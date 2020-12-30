import React, { useState } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { RandomRecipe } from "./components/RandomRecipe";
import { RandomFullRecipe } from "./components/RandomFullRecipe";

const App = () => {
  const [getNewRecipe, setGetNewRecipe] = useState(false);
  const [showFullRecipe, setShowFullRecipe] = useState(true);

  return (
    <>
      <Header
        setGetNewRecipe={setGetNewRecipe}
        setShowFullRecipe={setShowFullRecipe}
      />
      <Banner />

      {showFullRecipe ? (
        <RandomFullRecipe getNewRecipe={getNewRecipe} />
      ) : (
        <RandomRecipe getNewRecipe={getNewRecipe} />
      )}
    </>
  );
};

export default App;
