import styled from "styled-components";

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