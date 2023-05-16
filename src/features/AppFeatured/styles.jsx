import styled from "styled-components";

export const FeaturedSection = styled.section`
   margin-top: 80px;
   margin-bottom: 80px;
`;
export const FeaturedInfoContainer = styled.div`
   margin: 0 auto;
   max-width: 660px;
   background-color:#eff7ef;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50px;
`;
export const FeaturedLock = styled.div`
   width: 42px;
   height: 42px;
   margin: 0 10px;
   & .top {
      max-height: 25px;
      max-width: 22px;
      min-height: 25px;
      min-width: 22px;
      margin-top: 2px;
      margin-left: auto;
      margin-right: auto;
      display: block;
   }
   & .main {
      max-height: 22px;
      max-width: 30px;
      min-height: 22px;
      min-width: 30px;
      margin: -9px auto 0;
      display: block;
   }
`
export const FeaturedDescription = styled.div`
   padding: 10px;
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
      &:hover {
      filter: saturate(450%);
   }
   }  
`;