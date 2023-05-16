import {
  ServicesSection,
  ServicesTitle,
  ServicesDescription,
  ServicesContainer,
  FeaturesHead,
  Features,
  Option,
  FeaturesItem,
  Options,
  OptionsHead,
  HeadContainer,
  OptionImgContainer,
  OptionLogo,

} from "./styles";
import logo from "../../resources/logo.svg"
import activeOption from "../../resources/active-option.svg";
import unActiveOption from "../../resources/un-active-option.svg";

const AppInvestmentServices = () => {
  return (
    <ServicesSection>
      <ServicesTitle>Path is not a Crypto Exchange.</ServicesTitle>
      <ServicesDescription>
        As a regulated investment advisor, we provide long-term investment strategies that put your interests ahead of our own.
      </ServicesDescription>
      <ServicesContainer>
        <Features>
          <HeadContainer><FeaturesHead>Features</FeaturesHead></HeadContainer>
          <FeaturesItem>Do your own research</FeaturesItem>
          <FeaturesItem>Registered Robo-Investment Advisor</FeaturesItem>
          <FeaturesItem>Risk-adjusted portfolios</FeaturesItem>
          <FeaturesItem>Leverage trading</FeaturesItem>
          <FeaturesItem>Educational resources</FeaturesItem>
        </Features>
        <Options>
          <HeadContainer><OptionsHead><OptionLogo><img src={logo} alt="" /></OptionLogo></OptionsHead></HeadContainer>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
        </Options>
        <Options>
          <HeadContainer><OptionsHead>Crypto Exchanges</OptionsHead></HeadContainer>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
          <Option> <OptionImgContainer><img src={activeOption}></img></OptionImgContainer></Option>
        </Options>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default AppInvestmentServices