import styled from "styled-components";

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