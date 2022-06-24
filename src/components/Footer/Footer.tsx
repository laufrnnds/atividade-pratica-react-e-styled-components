import * as React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import FooterStyled from "./FooterStyled";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="copyright-links">
        <nav>
          <ul>
            <li>
              <Link to={"#"}>About</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
            <li>
              <Link to={"#"}>Terms Of Use</Link>
            </li>
            <li>
              <Link to={"#"}>Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <small>&copy; Your WebSite 2022. All Rights Reserved.</small>
      </div>

      <div className="social-midias">
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsInstagram />
        </span>
        <span>
          <BsTwitter />
        </span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
