import styled from "styled-components/macro";
import MarkdownView from "react-showdown";

export const StyledMarkdownView = styled(MarkdownView)`
  & p {
    color: #000;
    font-weight: 400;
    line-height: 20px;
  }

  & h1 {
    font-size: 32px;
    line-height: 40px;
    color: #333;
    font-weight: 600;
    text-transform: capitalize;
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

    & p {
      display: inline;
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
    & li:nth-child(13)::before {
      content: "THIRTEEN. ";
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
    font-weight: 600;
  }
`;
