import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";
import styled from "styled-components/macro";

import { RandomImage } from "./RandomImage";

const StyledMarkdownView = styled(MarkdownView)`
  color: blue;
  & li {
    color: red;
  }
`;

const Description = styled.p``;

export const RandomFullRecipe = ({ getRandomFullRecipe }) => {
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
  }, [URL, setRandomFullRecipe, getRandomFullRecipe]);
  console.log("randomFullRecipe", randomFullRecipe);
  console.log(
    "Olles test",
    `${randomFullRecipe?.base_layer?.name} with ${randomFullRecipe?.mixin?.name}`
  );

  return (
    <div>
      <Description>
        {randomFullRecipe?.base_layer && randomFullRecipe?.base_layer?.name}
        {randomFullRecipe?.mixin && ` with ${randomFullRecipe?.mixin?.name}`}
        {randomFullRecipe?.condiment &&
          ` garnished with ${randomFullRecipe?.condiment?.name}`}
        {randomFullRecipe?.seasoning &&
          ` topped with ${randomFullRecipe?.seasoning?.name}`}
        {randomFullRecipe?.shell &&
          ` wrapped in ${randomFullRecipe?.shell?.name}`}
      </Description>

      <StyledMarkdownView markdown={randomFullRecipe?.base_layer?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.condiment?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.seasoning?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.mixin?.recipe} />
      <MarkdownView markdown={randomFullRecipe?.shell?.recipe} />
      <RandomImage />
    </div>
  );
};
