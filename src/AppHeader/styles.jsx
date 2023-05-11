import styled from "styled-components";

export const Header = styled.div`
   margin-top: 0;
   padding: 10px 0 ;
   width: 100%;
   position: sticky;
   top: 0;
   display: flex;
   justify-content: space-between;
   background-color: rgba(255,255,255, .8);
   z-index: 100;
   backdrop-filter: blur(5px);
`;
export const NavPanel = styled.nav`
   width: 200px;
`;

export const NavList = styled.ul`
   display: flex;
`;
export const NavItem = styled.li`
   padding: 10px;
   margin-left: 10px;
   margin-right: 10px;
   cursor: pointer;
   &:hover {
      color: #3554f2;
   }
`;