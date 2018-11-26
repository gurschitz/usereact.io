import * as React from "react";
import styled from "styled-components";
import { media } from "../media";
// import { useSpring, animated } from "react-spring";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`
    flex-direction: row;
  `}
`;

export function Container({ children, ...other }) {
  // const [springProps] = useSpring({
  //   from: { opacity: 0 },
  //   opacity: 1
  // });

  return <StyledContainer {...other}>{children}</StyledContainer>;
}

export const ContentContainer = styled.div`
  ${media.md`
    max-width: 800px;
  `}
`;
