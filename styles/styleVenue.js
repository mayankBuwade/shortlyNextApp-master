import styled from "styled-components";
import theme from "../colors/theme";

const Div = styled.div`
  color: ${(props) => props.color};
  font-size: 1.4em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25%;
  padding-right: 25%;
  padding-bottom: 10%;
  background-color: #fff;

  @media only screen and (max-width: 480px) {
    padding-left: 15%;
    padding-right: 15%;
    div {
        max-width: 240;
        max-height: 240;
    }
  }
`;

export default Div;
