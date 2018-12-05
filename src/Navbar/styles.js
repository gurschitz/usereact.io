import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
`;

export const Link = styled.a`
  display: flex;
  height: inherit;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

export const BrandName = styled.h1`
  margin-left: 15px;
  font-size: 40px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: white;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: 100%;
`;
