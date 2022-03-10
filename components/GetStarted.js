import styled from "styled-components";
import { Button } from "../styles/styleLinkShortner";

function GetStarted() {
    return ( 
        <Div>
            <h1>Boost your links today</h1>
            <ModifiedButton>Get Started</ModifiedButton>
        </Div>
     );
}

export default GetStarted;

const Div = styled.div`
    background-image: url("/meteor.png");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    h1 {
        color: #fff;
    }
`

const ModifiedButton = styled(Button) `
    border-radius: 180px;
    padding: 10px;
    max-width: 150px;
`