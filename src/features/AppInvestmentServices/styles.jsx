import styled from "styled-components";
import { Logo } from "../../styles";
export const ServicesSection = styled.section``;
export const ServicesTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  font-size: 72px;
  line-height: 105%;
`;
export const ServicesDescription = styled.p`
  text-align: center;
  margin-top: 24px;
  padding-top: 0;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 24px;
  line-height: 150%;
`;
export const ServicesContainer = styled.div`
  background-image: linear-gradient(#f5f6fa,#f5f6fa);
  display: flex;
  justify-content: center;
  padding: 60px 100px;
  border-radius: 40px;
`;
export const ServicesWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const ServicesHeads = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;
export const ServicesHead = styled.div`
  width: 360px;
  h4 {
    font-size: 18px;
    font-weight: 700;
  }
  h3{
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const ServicesFeatures = styled.div`
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
`;
export const ServicesFeature = styled.div`
  width: 360px;
  span {
    font-size: 18px;
  }
`;
export const ServicesOption = styled.div`
  width: 24px;
  margin: 0 auto;
`;
export const OptionLogo = styled(Logo)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100px
    
  }
`;