import styled from "styled-components";

export const Header = styled.div`
   margin-top: 0;
   padding: 20px 0 ;
   width: 100%;
   position: sticky;
   top: 0;
   display: flex;
   justify-content: space-between;
   background-color: rgba(255,255,255, .8);
   z-index: 1;
`;
export const Logo = styled.div`
   display: flex;
   align-items: center;
   width: 150px;
   cursor: pointer;
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
export const Wrapper = styled.div`
   margin: 0 auto;
   width: 80%;
`;
export const Banner = styled.section`
`;
export const BannerTitle = styled.h1`
   
`;
export const BannerText = styled.p``;
export const BannerButton = styled.button``;
export const BannerVideo = styled.video``;