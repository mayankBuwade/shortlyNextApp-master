import styled , { createGlobalStyle }  from "styled-components";
import theme from "../colors/theme";
theme


export const Container = styled.div`
  @import url("import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap');");
  font-family: "Poppins";
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Popins", sans-serif;
    font-size: 14px;
    font-weight:  500, 700;
    background-color: ${theme.colors.lightGray};
  }
`

export {GlobalStyle};