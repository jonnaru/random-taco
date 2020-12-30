import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";
import styled from "styled-components/macro";

import { RandomImage } from "./RandomImage";
import { PageContainer } from "../lib/PageContainer";
import { IconButtons } from "./IconButtons";
import { Category } from "./Category";

const StyledMarkdownView = styled(MarkdownView)`
  color: blue;
  & li {
    color: red;
  }
`;

const RecipeDescription = styled.p`
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
`;

const TopContainer = styled.section`
  display: flex;
`;

export const RandomFullRecipe = ({ getNewRecipe }) => {
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
  }, [URL, setRandomFullRecipe, getNewRecipe]);
  console.log("randomFullRecipe", randomFullRecipe);
  console.log(
    "Olles test",
    `${randomFullRecipe?.base_layer?.name} with ${randomFullRecipe?.mixin?.name}`
  );

  return (
    <PageContainer>
      <main>
        <TopContainer>
          <div>
            <h1>Random Full Recipe</h1>
            <RecipeDescription>
              {randomFullRecipe?.base_layer &&
                randomFullRecipe?.base_layer?.name}
              {randomFullRecipe?.mixin &&
                ` with ${randomFullRecipe?.mixin?.name}`}
              {randomFullRecipe?.condiment &&
                ` garnished with ${randomFullRecipe?.condiment?.name}`}
              {randomFullRecipe?.seasoning &&
                ` topped with ${randomFullRecipe?.seasoning?.name}`}
              {randomFullRecipe?.shell &&
                ` wrapped in ${randomFullRecipe?.shell?.name}`}
            </RecipeDescription>
            <Category />
            <IconButtons />
          </div>
          <RandomImage />
        </TopContainer>

        <section>
          <StyledMarkdownView markdown={randomFullRecipe?.base_layer?.recipe} />
          <MarkdownView markdown={randomFullRecipe?.condiment?.recipe} />
          <MarkdownView markdown={randomFullRecipe?.seasoning?.recipe} />
          <MarkdownView markdown={randomFullRecipe?.mixin?.recipe} />
          <MarkdownView markdown={randomFullRecipe?.shell?.recipe} />
        </section>
      </main>
    </PageContainer>
  );
};
