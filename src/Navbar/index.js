import * as React from "react";
import * as S from "./styles";

function Navbar({ children, logoSrc, brandName }) {
  return (
    <S.Nav>
      <S.Logo src={logoSrc} alt="Use React Logo" />
      <S.BrandName>{brandName}</S.BrandName>
      {children}
    </S.Nav>
  );
}

export default Navbar;
