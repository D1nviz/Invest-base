import styled from "styled-components";

export const Logo = styled.div`
   display: flex;
   align-items: center;
   width: 150px;
   cursor: pointer;
`;
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   width: 85%;
   flex: 1 1 auto;
`;
export const Button = styled.button`
   margin-top: 40px;
   display: block;
   transition: all 0.2s ease-in;
   position: relative;
   overflow: hidden;
   z-index: 1;
   color: white;
   padding: 0.7em 1.7em;
   font-size: 18px;
   border-radius: 0.5em;
   background: #2f3158;
   border: 1px solid #e8e8e8;
   box-shadow: 0px 0px 35px 2px #bdbdbdc5;
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
         background-color: white;
         border-radius: 50%;
         display: block;
         transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
         z-index: -1;
      }
      &:hover {
         color: #2f3158;
         border: 1px solid white;
      }
      &:hover::before {
         top: -35%;
         background-color: white;
         transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
      &:hover::after {
         top: -45%;
         background-color: white;
         transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
`;
