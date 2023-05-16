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
  border-radius: 17px;
`;
export const CryptoExchanges = styled.div`
  border: 0 solid #b0b0b0;
  border-bottom: 2px solid #2f3158;
`;
export const Features = styled.div`
  width: 40%; 
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const HeadContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding-bottom: 50px;
  border-bottom: 2px solid black;
`;
export const FeaturesHead = styled.h4`
  font-size: 18px;
  font-weight: 700;
  padding: 0;
  margin-top: 10px;
`;
export const FeaturesItem = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 20px 0;
  border-bottom: 1px solid gray;
`;
export const OptionsHead = styled.h4`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`
export const Options = styled.div`
  width: 40%;
  max-width: 300px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Option = styled.div`
  width: 100%;
  padding: 18.3px 0;
  
  border-bottom: 1px solid gray;
`;
export const OptionImgContainer = styled.div`
  margin: 0 auto;
  width: 24px;
`;

export const OptionLogo = styled(Logo)`
  width: 100px;
  margin: 0 auto;
`

