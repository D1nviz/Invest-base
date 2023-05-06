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
export const BannerSection = styled.section``;
export const BannerContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
export const BannerTitle = styled.h1`
   margin: 0;
   font-size: 64px;
   font-weight: 400;
   span {
      font-size: 72px;
      font-weight: bold;
   }
`;
export const BannerInfo = styled.div`
   width: 50%;
   flex-direction: column;
`;
export const BannerDescription = styled.p`
   font-size: 16px;
`;

export const BannerButton = styled.button`
   margin-top: 40px;
   display: block;
   transition: all 0.2s ease-in;
   position: relative;
   overflow: hidden;
   z-index: 1;
   color: #090909;
   padding: 0.7em 1.7em;
   font-size: 18px;
   border-radius: 0.5em;
   background: #e8e8e8;
   border: 1px solid #e8e8e8;
   box-shadow: 6px 6px 12px #c5c5c5,
               -6px -6px 12px #ffffff;
   cursor: pointer;
      &:active {
         transform: scale(.98);
         color: #666;
         transition: all 0.5s;
         box-shadow: none;
      }
      &::before {
         content: "";
         position: absolute;
         left: 50%;
         transform: translateX(-50%) scaleY(1) scaleX(1.25);
         top: 100%;
         width: 140%;
         height: 180%;
         background-color: rgba(0, 0, 0, 0.05);
         border-radius: 50%;
         display: block;
         transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
         z-index: -1;
      }
      
      &::after {
         content: "";
         position: absolute;
         left: 55%;
         transform: translateX(-50%) scaleY(1) scaleX(1.45);
         top: 180%;
         width: 160%;
         height: 190%;
         background-color: #6556e6;
         border-radius: 50%;
         display: block;
         transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
         z-index: -1;
      }
      &:hover {
         color: #ffffff;
         border: 1px solid #6556e6;
      }
      &:hover::before {
         top: -35%;
         background-color: #6556e6;
         transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
      &:hover::after {
         top: -45%;
         background-color: #6556e6;
         transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
`;
export const BannerVideoContainer = styled.div`
   width: 500px;
   height: 600px;
`;
export const BannerVideo = styled.iframe`
   border: none;
   overflow: hidden;
   width: 100%;
   height: 100%;
   margin: 0;
   padding: 0;
`;
export const FeaturedSection = styled.section`
margin-top: 80px;`;
export const FeaturedInfoContainer = styled.div`
   margin: 0 auto;
   width: 660px;
   background-color:#eff7ef;
   display: flex;
   justify-content: center;
   border-radius: 50px 50px 50px 50px;
   `;
export const FeaturedDescription = styled.div`
   width: 480px;
   `;
export const FeaturedTitle = styled.p`
   margin-bottom: 0;
   font-weight: 700;
   font-size: 18px;
`;
export const FeaturedText = styled.p`
   font-size: 16px;
   line-height: 150%;
   margin-top: 5px;
`;
export const FeaturedItemsContainer = styled.div`
   grid-row-gap: 16px;
   grid-template-rows: auto;
   grid-template-columns: .8fr 1fr 1fr 1fr 1fr;
   grid-auto-columns: 1fr;
   align-items: center;
   margin-left: auto;
   margin-right: auto;
   padding-top: 40px;
   display: grid;
`;
export const FeaturedItem = styled.div`
   font-size: 16px;
   display: flex;
   justify-content: center;
   overflow-clip-margin: content-box;
   overflow: clip;
   width: 120px;
   img {
      cursor: pointer;
   }
`;
