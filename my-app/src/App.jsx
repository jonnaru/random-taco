import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { RandomRecipe } from "./components/RandomRecipe";
// import { RandomFullRecipe } from "./components/RandomFullRecipe";
import { RandomImage } from "./components/RandomImage";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* <RandomFullRecipe /> */}
      <RandomRecipe />
      <RandomImage />
    </>
  );
};

export default App;
