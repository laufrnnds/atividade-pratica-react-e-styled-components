import styled from "styled-components";

interface SectionProps {
  ordem?: boolean;
}

const SectionContentStyled = styled.div<SectionProps>`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.ordem ? "row-reverse" : "row")};
  background-color: ${(props) => props.theme.secondary};

  .container-text {
    width: 50vw;
    padding: 50px;
    color: ${(props) => props.theme.color};
  }
  h2 {
    color: ${(props) => props.theme.primary};
  }
`;

export default SectionContentStyled;
