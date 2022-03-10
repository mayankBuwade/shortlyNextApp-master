import Image from 'next/image'
import styled from "styled-components";
import logo from "../public/icon-brand-recognition.svg";
import theme from "../colors/theme";
function Card() {
  return (
    <Div>
      <div>
        <Image alt="logo" src={logo} width={"25px"} height={"25px"} />
      </div>
      <h1>Brand Recognition</h1>
      <p>
        Boost your brand recognition with each click. Generic links don&apos;t mean a
        thing. Branded links helps instil confidence in your content.
      </p>
    </Div>
  );
}

export default Card;

const Div = styled.div`
  width: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
  background-color: #fff;
  h1 {
    font-size: 1.5vw;
  }
  p {
    font-size: 1.5vw;
    color: ${theme.colors.gray};
  }
  div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.darkViolet};
    position: relative;
    bottom: 1.56rem;
  }

  @media only screen and (max-width: 720px) {
    div {
      width: 35px;
      height: 35px;
    }
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    max-width: 375px;
    padding: 1rem;
    margin: 1rem;
    height: fit-content;
    
    h1 {
      font-size: 12px;
    }
    p {
      font-size: 12px;
      color: ${theme.colors.gray};
    }
    div {
      width: 35px;
      height: 35px;
    }
  }
`;
