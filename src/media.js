import { css } from "styled-components";

const sizes = {
  lg: 992,
  md: 768,
  sm: 572,
  xl: 1200
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});
