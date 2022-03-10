import Image from 'next/image'
import MainDiv, { Nav, SocialNavOne, SocialNavTwo } from "../styles/styleFooter";
import ig from "../public/icon-instagram.svg";
import fb from "../public/icon-facebook.svg";
import pt from "../public/icon-pinterest.svg";
import tw from "../public/icon-twitter.svg";

const Footer = () => {
  return (
    <MainDiv>
      <SocialNavOne>
        <div>
          <h3>
            Shortly
          </h3>
        </div>
        <a>
          <Image className="image" alt="fb" src={fb} width={'15px'} height={'15px'}/>
        </a>
        <a>
          <Image src={tw} alt="tw" width={'15px'} height={'15px'} className="image"/>
        </a>
        <a>
          <Image src={pt} alt="pt" width={'15px'} height={'15px'} 
          className="image" />
        </a>
        <a>
          <Image src={ig} alt="ig" width={'15px'} height={'15px'} 
          className="image"
          />
        </a>
      </SocialNavOne>
      <Nav>
        <div>
          <h3>Features</h3>
        </div>
        <a>Link Shortening</a>
        <a>Branded Links</a>
        <a>Analytics</a>
      </Nav>
      <Nav>
        <div>
          <h3>Resources</h3>
        </div>
        <a>Blog</a>
        <a>Developers</a>
        <a>Support</a>
      </Nav>
      <Nav>
        <div>
          <h3>Company</h3>
        </div>
        <a>About</a>
        <a>Our Team</a>
        <a>Careers</a>
        <a>Contact</a>
      </Nav>
      <SocialNavTwo>
        <a>
          <Image className="image" alt="fb" src={fb} width={'15px'} height={'15px'}/>
        </a>
        <a>
          <Image src={tw} alt="tw" width={'15px'} height={'15px'} className="image"/>
        </a>
        <a>
          <Image src={pt} alt="pt" width={'15px'} height={'15px'} 
          className="image" />
        </a>
        <a>
          <Image src={ig} alt="ig" width={'15px'} height={'15px'} 
          className="image"
          />
        </a>
      </SocialNavTwo>
    </MainDiv>
  );
};

export default Footer;
