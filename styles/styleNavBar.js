import styled from "styled-components";
import theme from "../colors/theme";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  background-color: #fff;

  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`;

const Div = styled.div`
  color: ${(props) => props.color};
  @media only screen and (max-width: 375px) {
    display: none;
  }
`;

const Link = styled.a`
  margin: 1vw;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.color};
  &:hover {
    color: ${theme.colors.darkViolet};
  }
`;

const Wrapper = styled.div`
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  div {
    display: none;
    position: absolute;
    right: 15px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  button {
    display: flex;
    background-color: #fff;
    border: none;
  }

  &:hover {
    div {
      display: block;
    }
  }

  @media only screen and (min-width: 375px) {
    display: none;
  }
`;

export default Nav;
export { Link, Div, Wrapper };
