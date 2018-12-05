import * as React from "react";
import * as S from "./styles";

function Navbar({ children, logoSrc, brandName }) {
  return (
    <S.Nav>
      <S.Link href="/">
      <S.Logo src={logoSrc} alt="Use React Logo" />
      <S.BrandName>{brandName}</S.BrandName>
      </S.Link>
      {children}
    </S.Nav>
  );
}

export default Navbar;
