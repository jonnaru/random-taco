import React, { useEffect, useState } from "react";

export const RandomTaco = () => {
  const [randomRecipe, setRandomRecipe] = useState(1);
  const URL = `http://taco-randomizer.herokuapp.com/random/`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRandomRecipe(data);
      });
  }, [URL, setRandomRecipe]);
  console.log(randomRecipe);

  return (
    <main>
      <p>hej</p>

      <h1>{randomRecipe?.base_layer?.name}</h1>
    </main>
  );
};
