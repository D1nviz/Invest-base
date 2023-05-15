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
      &:hover {
      filter: saturate(450%);
   }
   }  
`;