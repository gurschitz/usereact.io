import styled from "styled-components";

const Avatar = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-size: 170px;
  background-image: url(${props => props.src});
`;

export default Avatar;
