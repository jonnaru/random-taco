import React from "react";
import { RandomRecipe } from "./components/RandomRecipe";
// import { RandomFullRecipe } from "./components/RandomFullRecipe";
import { RandomImage } from "./components/RandomImage";

const App = () => {
  return (
    <>
      {/* <RandomFullRecipe /> */}
      <RandomRecipe />
      <RandomImage />
    </>
  );
};

export default App;
