import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";
import styled from "styled-components/macro";

import { RandomImage } from "./RandomImage";
import { IconButtons } from "./IconButtons";
import { Category } from "./Category";
import { HomePageLink } from "./HomePageLink";

import { Heading } from "../lib/styling/Heading";
import { PageContainer } from "../lib/styling/PageContainer";
import { RecipeDescription } from "../lib/styling/RecipeDescription";
import { TopContainer } from "../lib/styling/TopContainer";
import { RecipeDescriptionContainer } from "../lib/styling/RecipeDescriptionContainer";
import { LeftTopContainer } from "../lib/styling/LeftTopContainer";

const StyledMarkdownView = styled(MarkdownView)`
  color: blue;
  & li {
    color: red;
  }
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

  return (
    <PageContainer>
      <main>
        <TopContainer>
          <LeftTopContainer>
            <Heading>Random Recipe</Heading>
            <RecipeDescriptionContainer>
              <RecipeDescription>
                {randomFullRecipe?.base_layer &&
                  randomFullRecipe?.base_layer?.name}
                {randomFullRecipe?.mixin &&
                  ` with ${randomFullRecipe?.mixin?.name}`}
                {randomFullRecipe?.condiment &&
                  ` garnished with ${randomFullRecipe?.condiment?.name}`}
                {randomFullRecipe?.seasoning &&
                  ` topped off with ${randomFullRecipe?.seasoning?.name}`}
                {randomFullRecipe?.shell &&
                  ` and wrapped in ${randomFullRecipe?.shell?.name}`}
              </RecipeDescription>
            </RecipeDescriptionContainer>

            <HomePageLink />
            <Category />
            <IconButtons />
          </LeftTopContainer>
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
