import styled from "styled-components";
import posed from "react-pose";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  margin: 0 0 32px 0;
`;

export const Collapsable = posed.div({
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 500 } }
});

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
