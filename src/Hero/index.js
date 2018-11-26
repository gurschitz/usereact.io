import * as React from "react";
import * as S from "./styles";

function Hero({ children, ...other }) {
  return (
    <S.Container {...other}>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.Container>
  );
}

export default Hero;
