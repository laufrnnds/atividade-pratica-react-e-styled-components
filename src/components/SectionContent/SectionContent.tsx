import * as React from "react";
import SectionContentStyled from "./SectionContentStyled";
import BoxImage from "../BoxImage/BoxImage";

interface SectionContentProps {
  titulo: string;
  texto: string;
  reverse?: boolean;
  imagem: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
  titulo,
  texto,
  imagem,
  reverse,
}) => {
  return (
    <SectionContentStyled ordem={reverse}>
      <div className="container-text">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <BoxImage urlimagem={imagem} />
    </SectionContentStyled>
  );
};

export default SectionContent;
