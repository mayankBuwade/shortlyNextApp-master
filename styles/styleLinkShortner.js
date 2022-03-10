import styled from "styled-components";
import theme from "../colors/theme";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/meteor.svg");
  width: fit-content;
  height: 20vh;
  padding: 0;
  position: relative;
  bottom: 2.4em;
  background-size: cover;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 50vw;
  height: 6vh;
  margin-left: 1rem;
  margin-right: 1rem;
  ::placeholder {
    color: ${theme.colors.red};
  }
`;

const Button = styled.button`
  min-width: 15vw;
  min-height: 40px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
  background: ${theme.colors.cyan};
  color: #fff;
  border: 0;
  border-radius: 5px;

  &:hover {
    background-color: ${theme.colors.lightCyan};
    font-weight: bold;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: .5rem;
    min-height: 20px;
    font-size: .7rem;
    margin: 5px;
  }
`;
export default Div;
export { Input, Button, Form };
