import Image from 'next/image'
import Div from "../styles/styleVenue";
import logo from "../public/people_working.svg";

function Venu() {
  return (
    <>
      <Div>
        <h1>MORE THAN JUST SHORTER LINK</h1>
        <div>
          <Image src={logo} alt="img" width={250} height={250} />
        </div>
      </Div>
    </>
  );
}

export default Venu;
