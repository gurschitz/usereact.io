import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  color: white;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-size: 170px;
  background-image: url(${props => props.src});
`;

export const Description = styled.div``;
