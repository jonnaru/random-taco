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

export const RandomRecipe = ({ getNewRecipe }) => {
  const [randomRecipe, setRandomRecipe] = useState();
  const URL = `http://taco-randomizer.herokuapp.com/random/`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRandomRecipe(data);
      });
  }, [URL, setRandomRecipe, getNewRecipe]);

  return (
    <PageContainer>
      <main>
        <TopContainer>
          <LeftTopContainer>
            <Heading>Random Mix</Heading>
            <RecipeDescriptionContainer>
              <RecipeDescription>
                {randomRecipe &&
                  `${randomRecipe.base_layer.name} with 
                  ${randomRecipe.condiment.name} garnished with 
                  ${randomRecipe.mixin.name} topped off with 
                  ${randomRecipe.seasoning.name} and wrapped in 
                  ${randomRecipe.shell.name}`}
              </RecipeDescription>
            </RecipeDescriptionContainer>

            <HomePageLink />
            <Category />
            <IconButtons />
          </LeftTopContainer>
          <RandomImage />
        </TopContainer>

        <BottomContainer>
          <RecipeArticle>
            <StyledMarkdownView markdown={randomRecipe?.base_layer?.recipe} />
          </RecipeArticle>

          <RecipeArticle>
            <StyledMarkdownView markdown={randomRecipe?.condiment?.recipe} />
          </RecipeArticle>

          <RecipeArticle>
            <StyledMarkdownView markdown={randomRecipe?.mixin?.recipe} />
          </RecipeArticle>

          <RecipeArticle>
            <StyledMarkdownView markdown={randomRecipe?.seasoning?.recipe} />
          </RecipeArticle>

          <RecipeArticle>
            <StyledMarkdownView markdown={randomRecipe?.shell?.recipe} />
          </RecipeArticle>
        </BottomContainer>
      </main>
    </PageContainer>
  );
};
