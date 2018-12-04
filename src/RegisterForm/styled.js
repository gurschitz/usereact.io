import styled from "styled-components";
import posed from "react-pose";


export const Collapsable = posed.div({
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 500 } }
});

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px 0;
`;
