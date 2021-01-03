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
import { BottomContainer } from "../lib/styling/BottomContainer";
import { RecipeArticle } from "../lib/styling/RecipeArticle";
import { StyledMarkdownView } from "../lib/styling/StyledMarkdownView";

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
        <TopContainer>
          <LeftTopContainer>
            <Heading>Random Mix</Heading>
            <RecipeDescriptionContainer>
              <RecipeDescription>
                {randomRecipe?.base_layer?.name} with{" "}
                {randomRecipe?.condiment?.name} garnished with{" "}
                {randomRecipe?.mixin?.name} topped off with{" "}
                {randomRecipe?.seasoning?.name} and wrapped in{" "}
                {randomRecipe?.shell?.name}
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
