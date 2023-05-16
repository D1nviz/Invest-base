import {
  ServicesSection,
  ServicesTitle,
  ServicesDescription,
  ServicesContainer,
  ServicesWrapper,
  ServicesHeads,
  ServicesHead,
  ServicesFeature,
  ServicesFeatures,
  ServicesOption,
  OptionLogo
} from "./styles";
import { featuresItems } from "../Constants";
import logo from "../../resources/svg/logo.svg"

const AppInvestmentServices = () => {
  return (
    <ServicesSection>
      <ServicesTitle>Path is not a Crypto Exchange.</ServicesTitle>
      <ServicesDescription>
        As a regulated investment advisor, we provide long-term investment strategies that put your interests ahead of our own.
      </ServicesDescription>
      <ServicesContainer>
        <ServicesWrapper>
          <ServicesHeads>
            <ServicesHead><h4>Features</h4></ServicesHead>
            <ServicesHead><OptionLogo><div><img src={logo} alt="" /></div></OptionLogo></ServicesHead>
            <ServicesHead><h3>Crypto Exchanges</h3></ServicesHead>
          </ServicesHeads>
          {featuresItems.map(({ id, title, path, cryptoExchanges }) => (
            <ServicesFeatures key={id}>
              <ServicesFeature ><span>{title}</span></ServicesFeature>
              <ServicesFeature>
                <ServicesOption>
                  <img src={path} alt="option" />
                </ServicesOption>
              </ServicesFeature>
              <ServicesFeature>
                <ServicesOption>
                  <img src={cryptoExchanges} alt="" />
                </ServicesOption>
              </ServicesFeature>
            </ServicesFeatures>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default AppInvestmentServices