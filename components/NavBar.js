import Nav, { Div, Link, Wrapper } from "../styles/styleNavBar";
import Image from 'next/image'
import menu from '../public/menu.png'
import theme from "../colors/theme";

function NavBar() {
  return (
    <Nav>
      <h1>Shortly</h1>
      <Div color={theme.colors.gray}>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Resources</Link>
      </Div>
      <Wrapper>
        <button>
          <Image
            alt="menu"
            width={"25px"}
            height={"25px"}
            src={menu}
          />
        </button>
        <div>
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>
      </Wrapper>
    </Nav>
  );
}

export default NavBar;
