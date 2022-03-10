import styled from "styled-components";
import Card from "./Card";

function Cards() {
  return (
  <Div>
      <Card />
      <Card />
      <Card />
  </Div>
  );
}

export default Cards;

const Div = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
`
