import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";

export const RandomFullTaco = () => {
  const [randomFullRecipe, setRandomFullRecipe] = useState(1);
  const URL = `http://taco-randomizer.herokuapp.com/random/?full-taco=true`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setRandomFullRecipe(data);
      });
  }, [URL, setRandomFullRecipe]);
  console.log("randomFullRecipe", randomFullRecipe);

  return (
    <div>
      <MarkdownView markdown={randomFullRecipe?.base_layer?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.condiment?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.seasoning?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.mixin?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.shell?.recipe} />
    </div>
  );
};
