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
margin-top: 80px;
margin-bottom: 80px;`;
export const FeaturedInfoContainer = styled.div`
   margin: 0 auto;
   max-width: 660px;
   background-color:#eff7ef;
   display: flex;
   justify-content: center;
   border-radius: 50px 50px 50px 50px;
`;
export const FeaturedDescription = styled.div`
   padding: 15px;
   max-width: 480px;
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

   margin: 40px auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
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
export const Footer = styled.footer`
   color: #878eb0;
   margin: 0 auto;
   text-align: left;
`;
export const FooterLinesContainer = styled.div`
   width: 100%;
   border-top:1px solid #878eb0; 
   border-bottom:1px solid #878eb0;
`;
export const FooterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 60px;
   padding-bottom: 60px;
   max-width: 1200px;
`;
export const FooterColumn = styled.div``;
export const FooterItem = styled.p`
   font-size: 14px;
   padding: 0 10px;
   cursor: pointer;
   &:hover {
      color: #3554f2;
   }
   
`;
export const FooterInfoContainer = styled.div``;
export const FooterLogo = styled.div`
   width: 125px;
`;
export const FooterDescription = styled.p`
   max-width: 500px;
`;
export const CardsSection = styled.section`
margin: 20px 0;
`;
export const CardContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
export const Card = styled.div`
   width: 250px;
   text-align: center;
`;
export const CardImgContainer = styled.div``;
export const CardTitle = styled.h4`
   font-size: 20px;
   font-weight: 600;
`;
export const CardDescription = styled.p`
   font-size: 16px;
   line-height: 140%;
`;

export const AdvantagesSection = styled.section`
margin-bottom: 50px;`;
export const AdvantagesTitle = styled.h2`
   text-align: center;
   margin-bottom: 30px;
   font-size: 72px;
   line-height: 105%;
`;
export const SlideContainer = styled.div`
   display: flex;
   justify-content: space-around;
   background-image: radial-gradient(circle at 100% 0,#11dead 7%,transparent),linear-gradient(#3554f2,#3554f2);
   border-radius: 90px;
   width: 100%;
    min-height: 640px;
    min-width: 50%;
`;
export const SlideInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 540px;
   align-self: center;
   margin-left: 140px;
   padding-top: 24px;
   padding-bottom: 24px;
   padding-right: 20px;
`;

export const ProductHeader = styled.h5`
   color: #95d6f6;
   font-size: 18px;
   font-weight: 600;
   line-height: 110%;
`;
export const SlideTitle = styled.h3`
   color: #fff;
   margin-top: 24px;
   padding-right: 0;
   font-size: 52px;
   line-height: 110%;
   margin-top: 0;
   margin-bottom: 0;
`;
export const SlideButton = styled(BannerButton)`
   box-shadow: none;
   width: 255px;
   padding: 14px;
   font-size: 18px;
   border-radius: 24px;
   margin: 25px 0;
    &:hover {
      
    }
`;
export const SlideImgContainer = styled.div`
   width: 500px;
   height: auto;
   min-height: auto;
   min-width: auto;
   justify-content: flex-end;
   align-self: flex-end;
   margin-right: 0;
   display: flex;
`;
export const SlideDescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
export const SlideDescription = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   color: #fff;
   align-self: auto;
   margin-top: 15px;
   padding-left: 24px;
   font-size: 18px;
   font-weight: 400;
   line-height: 125%;
   span {
      font-weight: 600;
      padding-left: 20px;
   }
   img {
      width: 30px;
      height: 26px;
   }
`;

