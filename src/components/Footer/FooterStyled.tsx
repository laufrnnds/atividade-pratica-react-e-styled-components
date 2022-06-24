import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100vw;
  height: 30vh;
  background-color: #a4bfb8;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #bf7f30;
  }
  span {
    font-size: 25px;
    color: #bf7f30;
    margin: 5px;
  }
`;

export default FooterStyled;
