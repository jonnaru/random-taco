import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";

import { PageContainer } from "../lib/PageContainer";
import { RandomImage } from "./RandomImage";

export const RandomRecipe = ({ getNewRecipe }) => {
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
  }, [URL, setRandomRecipe, getNewRecipe]);
  console.log(randomRecipe);

  return (
    <PageContainer>
      <main>
        <section>
          <h1>Random Mix Recipe</h1>
          <div>
            <p>
              {randomRecipe?.base_layer?.name} with{" "}
              {randomRecipe?.condiment?.name} and {randomRecipe?.mixin?.name}{" "}
              topped with {randomRecipe?.seasoning?.name} wrapped in{" "}
              {randomRecipe?.shell?.name}
            </p>
          </div>
          <RandomImage />
        </section>
        <section>
          <MarkdownView markdown={randomRecipe?.base_layer?.recipe} />
          <MarkdownView markdown={randomRecipe?.condiment?.recipe} />
          <MarkdownView markdown={randomRecipe?.mixin?.recipe} />
          <MarkdownView markdown={randomRecipe?.seasoning?.recipe} />
          <MarkdownView markdown={randomRecipe?.shell?.recipe} />
        </section>
      </main>
    </PageContainer>
  );
};
