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
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   width: 85%;
   flex: 1 1 auto;
`;
export const BannerSection = styled.section`
`;
export const BannerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const BannerTitle = styled.h1`
   font-size: 64px;
   font-weight: 400;
   span {
      font-size: 72px;
      font-weight: bold;
   }
   
`;
export const BannerInfo = styled.div`
width: 50%`;
export const BannerDescription = styled.p`
font-size: 16px;`;
export const BannerButton = styled.button``;
export const BannerVideoContainer = styled.div`
width: 500px;
height: 600px`
;
export const BannerVideo = styled.iframe `
   border: none;
   overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

`;