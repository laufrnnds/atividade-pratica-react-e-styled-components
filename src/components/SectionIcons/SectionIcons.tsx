import * as React from "react";
import { BsLaptop, BsBook, BsCheckCircle } from "react-icons/bs";
import styled from "styled-components";
import IconsWrapper from "../IconsWrapper/IconsWrapper";

const SectionIconStyled = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const SectionIcons: React.FC = () => {
  return (
    <SectionIconStyled>
      <IconsWrapper
        titulo="Titulo 1"
        texto="Lorem ipsum dolor sit amet consectetur."
        icon={<BsLaptop />}
      />
      <IconsWrapper
        titulo="Titulo 2"
        texto="Lorem ipsum dolor sit amet adipisicing."
        icon={<BsBook />}
      />
      <IconsWrapper
        titulo="Titulo 3"
        texto="Lorem ipsum dolor sit amet elit."
        icon={<BsCheckCircle />}
      />
    </SectionIconStyled>
  );
};

export default SectionIcons;
