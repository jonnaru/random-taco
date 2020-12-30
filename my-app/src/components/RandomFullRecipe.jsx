import React, { useEffect, useState } from "react";
import MarkdownView from "react-showdown";
import styled from "styled-components/macro";

import { RandomImage } from "./RandomImage";
import { PageContainer } from "../lib/PageContainer";
import { IconButtons } from "./IconButtons";
import { Category } from "./Category";
import { Heading } from "./Heading";
import { HomePageLink } from "./HomePageLink";

const StyledMarkdownView = styled(MarkdownView)`
  color: blue;
  & li {
    color: red;
  }
`;

const RecipeDescription = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`;

const LeftTopContainer = styled.div`
  padding-right: 60px;
`;

const RecipeDescriptionContainer = styled.div`
  margin-bottom: 16px;
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
                  ` topped with ${randomFullRecipe?.seasoning?.name}`}
                {randomFullRecipe?.shell &&
                  ` wrapped in ${randomFullRecipe?.shell?.name}`}
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
