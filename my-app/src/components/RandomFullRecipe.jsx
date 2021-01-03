import React, { useEffect, useState } from "react";

import { RandomImage } from "./RandomImage";
import { IconButtons } from "./IconButtons";
import { Category } from "./Category";
import { HomePageLink } from "./HomePageLink";

import { Heading } from "./styling/Heading";
import { PageContainer } from "./styling/PageContainer";
import { RecipeDescription } from "./styling/RecipeDescription";
import { TopContainer } from "./styling/TopContainer";
import { RecipeDescriptionContainer } from "./styling/RecipeDescriptionContainer";
import { LeftTopContainer } from "./styling/LeftTopContainer";
import { BottomContainer } from "./styling/BottomContainer";
import { RecipeArticle } from "./styling/RecipeArticle";
import { StyledMarkdownView } from "./styling/StyledMarkdownView";

export const RandomFullRecipe = ({ getNewRecipe }) => {
  const [randomFullRecipe, setRandomFullRecipe] = useState();
  const URL = `http://taco-randomizer.herokuapp.com/random/?full-taco=true`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRandomFullRecipe(data);
      });
  }, [URL, setRandomFullRecipe, getNewRecipe]);

  return (
    <PageContainer>
      <main>
        <TopContainer>
          <LeftTopContainer>
            <Heading>Random Recipe</Heading>
            <RecipeDescriptionContainer>
              <RecipeDescription>
                {randomFullRecipe?.base_layer?.name}

                {randomFullRecipe?.mixin &&
                  ` with ${randomFullRecipe.mixin.name}`}

                {randomFullRecipe?.condiment &&
                  ` garnished with ${randomFullRecipe.condiment.name}`}

                {randomFullRecipe?.seasoning &&
                  ` topped off with ${randomFullRecipe.seasoning.name}`}

                {randomFullRecipe?.shell &&
                  ` and wrapped in ${randomFullRecipe.shell.name}`}
              </RecipeDescription>
            </RecipeDescriptionContainer>

            <HomePageLink />
            <Category />
            <IconButtons />
          </LeftTopContainer>
          <RandomImage />
        </TopContainer>

        <BottomContainer>
          {randomFullRecipe?.base_layer && (
            <RecipeArticle>
              <StyledMarkdownView
                markdown={randomFullRecipe?.base_layer?.recipe}
              />
            </RecipeArticle>
          )}

          {randomFullRecipe?.condiment && (
            <RecipeArticle>
              <StyledMarkdownView
                markdown={randomFullRecipe?.condiment?.recipe}
              />
            </RecipeArticle>
          )}

          {randomFullRecipe?.seasoning && (
            <RecipeArticle>
              <StyledMarkdownView
                markdown={randomFullRecipe?.seasoning?.recipe}
              />
            </RecipeArticle>
          )}

          {randomFullRecipe?.mixin && (
            <RecipeArticle>
              <StyledMarkdownView markdown={randomFullRecipe?.mixin?.recipe} />
            </RecipeArticle>
          )}

          {randomFullRecipe?.shell && (
            <RecipeArticle>
              <StyledMarkdownView markdown={randomFullRecipe?.shell?.recipe} />
            </RecipeArticle>
          )}
        </BottomContainer>
      </main>
    </PageContainer>
  );
};
