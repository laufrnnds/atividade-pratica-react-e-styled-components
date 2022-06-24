import React from "react";
import IconsWrapperStyled from "./IconsWrapperStyled";

interface WrapperProps {
  titulo: string;
  texto: string;
  icon: React.ReactNode;
}

const IconsWrapper: React.FC<WrapperProps> = ({ icon, titulo, texto }) => {
  return (
    <IconsWrapperStyled>
      <span>{icon}</span>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </IconsWrapperStyled>
  );
};

export default IconsWrapper;
