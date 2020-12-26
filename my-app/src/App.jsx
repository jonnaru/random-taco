import React from "react";
import { RandomTaco } from "./components/RandomTaco";
import { RandomFullTaco } from "./components/RandomFullTaco";

const App = () => {
  return (
    <>
      <RandomTaco />
      <RandomFullTaco />;
    </>
  );
};

export default App;
