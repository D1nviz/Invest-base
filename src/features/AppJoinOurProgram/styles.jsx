import styled from "styled-components";
import { Button } from "../../styles";
export const JoinSection = styled.section`
  width: 95%;
  margin: 30px auto;
`;
export const JoinTitle = styled.h3`
  font-size: 82px;
  text-align: center;
`;
export const JoinGradient = styled.span`
  font-size: 1em;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(121deg,#3554f2,#11dead);
  -webkit-background-clip: text;
  background-clip: text;
`;
export const JoinButton = styled(Button)`
  width: 200px;
  height: 55px;
  margin: 80px auto;
`;

