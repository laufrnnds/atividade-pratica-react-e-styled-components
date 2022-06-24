import styled from "styled-components";
import img1 from "../../assets/banner2.jpg";

interface BannerProps {
  tamanho?: boolean;
}

const BannerStyled = styled.header<BannerProps>`
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  width: 100vw;
  height: ${(props) => (props.tamanho ? "30vh" : "50vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #402c1b;
    font-family: "Titan One", cursive;
    font-size: 50px;
  }
`;

export default BannerStyled;
