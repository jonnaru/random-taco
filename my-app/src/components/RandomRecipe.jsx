import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";

import { PageContainer } from "../lib/PageContainer";
import { RandomImage } from "./RandomImage";

export const RandomRecipe = ({ getRandomRecipe }) => {
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
  }, [URL, setRandomRecipe, getRandomRecipe]);
  console.log(randomRecipe);

  return (
    <PageContainer>
      <main>
        <p>
          {randomRecipe?.base_layer?.name} with {randomRecipe?.condiment?.name}{" "}
          and {randomRecipe?.mixin?.name} topped with{" "}
          {randomRecipe?.seasoning?.name} wrapped in {randomRecipe?.shell?.name}
        </p>

        <MarkdownView markdown={randomRecipe?.base_layer?.recipe} />
        <MarkdownView markdown={randomRecipe?.condiment?.recipe} />
        <MarkdownView markdown={randomRecipe?.mixin?.recipe} />
        <MarkdownView markdown={randomRecipe?.seasoning?.recipe} />
        <MarkdownView markdown={randomRecipe?.shell?.recipe} />
        <RandomImage />
      </main>
    </PageContainer>
  );
};
