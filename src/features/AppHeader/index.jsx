import {
  Header,
  NavPanel,
  NavList,
  NavItem
} from "./styles";
import { Logo } from "../../styles"
import logo from "../../resources/svg/logo.svg"

const AppHeader = () => {
  const pageReload = () => {
    window.location.reload()
  }
  return (
    <Header>
      <Logo onClick={pageReload}><img src={logo} alt="logo" /></Logo>
      <NavPanel>
        <NavList>
          <NavItem>Blog</NavItem>
          <NavItem>Company</NavItem>
        </NavList>
      </NavPanel>
    </Header>
  )
};

export default AppHeader;