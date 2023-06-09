import styled from "styled-components";
import { Button } from "../../styles";

export const AdvantagesSection = styled.div`
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;`;
export const AdvantagesTitle = styled.h2`
  text-align: center;
  font-size: 72px;
  line-height: 105%;
`;
export const SlidesContainer = styled.div`
  width: 100%;
`;
export const SlideContainer = styled.section`
  background-color: #f5f6fa;
  background-image: ${({ bgImg }) => bgImg};
  color: ${({ fntColor }) => fntColor};
  min-height: 640px;
  min-width: 50%;
  border-radius: 90px;
  justify-content: space-around;
  display: flex;
  overflow: hidden;
  z-index: ${({ zIndex }) => zIndex || 0};;
  box-shadow: 0px 0px 40px 1px #9595958d;
`;
export const SlideInfoContainer = styled.div`
  align-self: center;
  margin-left: 140px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 20px;
  order: 1;
`;
export const SlideHeadDesc = styled.h5`
  font-size: 18px;
  font-weight: 600;
  line-height: 110%;
  color: ${({ headColor }) => headColor};
`;
export const SlideTitle = styled.h3`
  padding-right: 0;
  font-size: 52px;
  line-height: 110%;
  margin-top: 0;
  margin-bottom: 0;
`;

export const SlideButton = styled.button`
  position: relative;
  font-size: 18px;
  text-decoration: none;
  width: 255px;
  padding: 14px;
  font-size: 18px;
  border-radius: 24px;
  margin: 25px 0;
  cursor: pointer;
  display: inline-block;
  border-radius: 6em;
  transition: all .2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: ${({ colorStyles }) => colorStyles ? colorStyles.color : "#fff" };
  background-color: ${({ colorStyles }) => colorStyles ? colorStyles.background : "#2f3158" };
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
    background-color: ${({ colorStyles }) => colorStyles ? colorStyles.background : "#2f3158" };
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
  }
`
export const SlideImgContainer = styled.div`
  order: ${({ position }) => position};
  align-self: flex-end;

  &.img-right {
    min-width: auto;
    justify-content: flex-end;
    margin-right: 0;
    display: flex;
  }

  &.img-left {
    max-width: 20%;
    margin-right: 140px;
    padding-top: 80px;
    padding-bottom: 0;
  }

  img {
    min-width: 500px;
    vertical-align: middle;
  }
`;
export const SlideDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SlideDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: auto;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: 125%;

  span {
    font-weight: 600;
    padding-left: 24px;
  }

  img {
    width: 30px;
    height: 26px;
  }
`;