import {
  Footer,
  FooterColumn,
  FooterItem,
  FooterInfoContainer,
  FooterLogo,
  FooterDescription,
  FooterContainer,
  FooterLinesContainer
} from "./styles";

import logo from "../../resources/logo.svg";

const AppFooter = () => {
  return (
    <Footer>
      <FooterLinesContainer>
        <FooterContainer>
          <FooterInfoContainer>
            <FooterLogo>
              <img src={logo} alt="logo" />
            </FooterLogo>
            <FooterDescription>
              300 South Wacker, Suite 1200, Chicago, Illinois
              Copyright © 2023 Path Finance Corporation. All rights reserved
            </FooterDescription>
          </FooterInfoContainer>
          <FooterColumn>
            <FooterItem>Contact</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Cookie</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterItem>Terms & Conditions</FooterItem>
            <FooterItem>Privacy Policy</FooterItem>
            <FooterItem>Risk Disclosures</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterItem> Instagram</FooterItem>
            <FooterItem>Twitter</FooterItem>
            <FooterItem>Facebook</FooterItem>
          </FooterColumn>
        </FooterContainer>
      </FooterLinesContainer>
    </Footer>
  )
}
export default AppFooter;