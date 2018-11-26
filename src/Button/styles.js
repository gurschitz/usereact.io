import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  -webkit-appearance: button;
  border-radius: 5px;
  font-size: 30px;
  padding: 5px 15px;
  transition: all 200ms ease-in-out;

  &:hover:enabled {
    background-color: white;
    color: #2f5e60;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
