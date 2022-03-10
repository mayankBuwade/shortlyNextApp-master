import styled from "styled-components";
import theme from "../colors/theme";

const MainDiv = styled.div`
    background-color: ${theme.colors.veryDarkBlue};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: #fff;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        Nav {
            align-items: center;
        }
    }
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: inherit;
    
    h3 {
        font-size: 10px;
    }
    
    a {
        color: ${theme.colors.gray};
        font-size: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        &:hover {
            color: ${theme.colors.cyan};
        }
    }
    
`

const SocialNavOne = styled.nav `
    a {
        padding: 5px;
    }
    @media only screen and (max-width: 600px) {
       a {
           display: none;
       }
    }
`;

const SocialNavTwo = styled.nav`
    @media only screen and (min-width: 600px) {
       a {
           display: none;
       }
    }
    margin-top: 2rem;
    a {
        padding: 10px;
    }
`


export default MainDiv;
export {Nav, SocialNavOne, SocialNavTwo};
