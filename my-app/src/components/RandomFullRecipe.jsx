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

const StyledMarkdownView = styled(MarkdownView)`
  & p {
    color: #000;
    font-weight: 400;
    line-height: 20px;
    text-transform: capitalize;
  }

  & h1 {
    font-size: 32px;
    line-height: 40px;
    color: #333;
    font-weight: 600;
    text-transform: uppercase;
  }

  & h2 {
    font-size: 22px;
    line-height: 28px;
    text-transform: uppercase;
    font-weight: 600;
  }

  & li {
    color: #000;

    & strong {
      font-weight: normal;
    }
  }

  & ul {
    padding-left: 160px;
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 20px;

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  & li ul {
    padding-left: 32px;
    list-style-type: inherit;
  }

  & ol {
    list-style: none;
    padding-left: 0;
    & li {
      padding-bottom: 20px;
      font-weight: 400;
      line-height: 20px;
    }
    & li::before {
      font-weight: 600;
    }
    & li:first-child::before {
      content: "ONE. ";
    }
    & li:nth-child(2)::before {
      content: "TWO. ";
    }
    & li:nth-child(3)::before {
      content: "THREE. ";
    }
    & li:nth-child(4)::before {
      content: "FOUR. ";
    }
    & li:nth-child(5)::before {
      content: "FIVE. ";
    }
    & li:nth-child(6)::before {
      content: "SIX. ";
    }
    & li:nth-child(7)::before {
      content: "SEVEN. ";
    }
    & li:nth-child(8)::before {
      content: "EIGHT. ";
    }
    & li:nth-child(9)::before {
      content: "NINE. ";
    }
    & li:nth-child(10)::before {
      content: "TEN. ";
    }
    & li:nth-child(11)::before {
      content: "ELEVEN. ";
    }
    & li:nth-child(12)::before {
      content: "TWELVE. ";
    }
  }

  & strong {
    font-size: 16;
    line-height: 28px;
    text-transform: uppercase;
    font-weight: 600;
  }

  & em {
    font-style: normal;
  }

  & a {
    color: inherit;
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
