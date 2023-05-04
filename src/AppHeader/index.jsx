import {
   Header,
   Logo,
   NavPanel,
   NavList,
   NavItem
} from "../styles";
import logo from "../resources/logo.svg" 
const AppHeader = () => {
   return (
      <Header>
         <Logo><img src={logo} alt="logo" /></Logo>
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