import styled from "styled-components";
import theme from "../colors/theme";
import { useState } from "react";

function ShortLinks({ query, shortLink }) {
  const [buttonStatus, setButtonStatus] = useState("Copy");
  const [lastShortLink, setLastShortLink] = useState();
  if (shortLink != lastShortLink && buttonStatus !== "Copy")
    setButtonStatus("Copy");
  return (
    <Div>
      <h2>{query}</h2>
      <hr />
      <h3>{shortLink}</h3>
      <ModifiedButton
        onClick={() => {
          setButtonStatus("Copied");
          setLastShortLink(shortLink);
          navigator.clipboard.writeText(shortLink);
        }}
        buttonText={buttonStatus}
      >
        {buttonStatus}
      </ModifiedButton>
    </Div>
  );
}

export default ShortLinks;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #fff;
  margin-left: 15vw;
  margin-right: 15vw;
  h2,
  h3 {
    font-size: 12px;
    font-weight: 400;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h2 {
    flex-grow: 6;
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
  }

  h3 {
    color: ${theme.colors.cyan};
    flex-grow: 3;
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    font-size: 2px;
    margin-left: 5rem;
    margin-right: 5rem;
    hr {
      flex-grow: 1;
      border: none;
      background-color: ${theme.colors.gray};
      height: 1px;
      width: 100%;
    }
    h2 {
      width: 250px;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 2px;
    margin-left: 2rem;
    margin-right: 2rem;
    h2 {
      width: 150px;
    }
  }

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    font-size: 2px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ModifiedButton = styled.button`
  background: ${theme.colors.cyan};
  color: #fff;
  border: 0;
  border-radius: 5px;
  
  flex-grow: 3;
  padding: 10px;
  margin: 1rem;
  min-width: 100px;
  min-height: 25px;
  max-height: 35px;
  background-color: ${(props) =>
    props.buttonText === "Copy" ? theme.colors.cyan : theme.colors.darkViolet};

  &:hover {
    background-color: ${(props) =>
      props.buttonText === "Copy"
        ? theme.colors.lightCyan
        : theme.colors.grayishViolet};
    font-weight: bold;
  }
`;
