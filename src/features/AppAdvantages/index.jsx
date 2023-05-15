import { v4 as uuidv4 } from 'uuid';

import { useRef, useEffect } from 'react';

import {
  AdvantagesSection,
  AdvantagesTitle,
  SlideHeadDesc,
  SlideButton,
  SlideContainer,
  SlidesContainer,
  SlideDescription,
  SlideDescriptionContainer,
  SlideImgContainer,
  SlideInfoContainer,
  SlideTitle,
} from "./styles";
import { slides } from "../Constants";
import { animateSlides } from '../../helpers';



const AppAdvantages = () => {
  const slidesRef = useRef([]);
  const slidesContainerRef = useRef(null);
  
  useEffect(() => {
    animateSlides();
  }, []);

  const setImageOrder = (id, image) => {
    const order = id % 2 ? 2 : 0;
    const imgPosition = id % 2 ? "img-right" : "img-left";
    return (
      <SlideImgContainer position={order} className={imgPosition}><img draggable={false} src={image} alt={`slide ${id}`} /></SlideImgContainer>
    )
  };
  const renderSlides = slides.map(({
    headDesc,
    title,
    image,
    description,
    id,
    bgImg,
    headColor,
    fntColor
  }, i) => {
    const renderDesctiption = description.map(({ ico, text }) => (
      <SlideDescription key={uuidv4()}><img src={ico} alt="description ico" /><span>{text}</span></SlideDescription>
    ));
    return (
      <SlideContainer className="slide" zIndex={i} ref={(ref) => (slidesRef.current[i] = ref)} bgImg={bgImg} fntColor={fntColor} key={uuidv4()}>
        {setImageOrder(id, image)}
        <SlideInfoContainer>
          <SlideHeadDesc headColor={headColor} >{headDesc}</SlideHeadDesc>
          <SlideTitle>{title}</SlideTitle>
          <SlideButton>Coming soon</SlideButton>
          <SlideDescriptionContainer>
            {renderDesctiption}
          </SlideDescriptionContainer>
        </SlideInfoContainer>
      </SlideContainer>
    )
  });
  return (
    <AdvantagesSection  >
      <AdvantagesTitle>Ditch your crypto exchange.</AdvantagesTitle>
      <SlidesContainer className="slides-container" ref={slidesContainerRef}>
        {renderSlides}
      </SlidesContainer>
    </AdvantagesSection>
  )
};

export default AppAdvantages;
