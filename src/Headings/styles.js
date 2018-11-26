import styled from "styled-components";
import { media } from "../media";

export const H1 = styled.h1`
  font-size: 40px;
  ${media.md`
    font-size: 60px;
  `}
`;

export const H2 = styled.h2`
  font-size: 30px;
  ${media.md`
    font-size: 40px;
  `}
`;

export const H3 = styled.h2`
  font-size: 25px;
`;
