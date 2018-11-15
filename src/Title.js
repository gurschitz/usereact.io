import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: 0px;
  line-height: 40px;
  color: #e99274;
`;

const Subtitle = styled.div``;

function Base({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default { Base, H1, Subtitle };
