import * as React from "react";
import * as S from "./styles";

function Person(props) {
  return <S.Container {...props} />;
}

Person.Avatar = S.Avatar;
Person.Name = S.Name;
Person.Description = S.Description;

export default Person;
