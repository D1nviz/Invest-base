import { v4 as uuidv4 } from 'uuid';
import {
  AdvantagesSection,
  AdvantagesTitle,
  SlideHeadDesc,
  SlideButton,
  SlideContainer,
  SlideDescription,
  SlideDescriptionContainer,
  SlideImgContainer,
  SlideInfoContainer,
  SlideTitle,
} from "./styles";
import { slides } from "../Constants";

const setImageOrder = (id, image) => {
  const order = id % 2 ? 2 : 0;
  const imgPosition = id % 2 ? "img-right" : "img-left";
  return (
    <SlideImgContainer position={order} className={imgPosition}><img draggable={false} src={image} alt={`slide ${id}`} /></SlideImgContainer>
  )
}

const renderSlides = slides.map(({
  headDesc,
  title,
  image,
  description,
  id,
  bgImg,
  headColor,
  fntColor
}) => {
  const renderDesctiption = description.map(({ ico, text }) => (
    <SlideDescription key={uuidv4()}><img src={ico} alt="description ico" /><span>{text}</span></SlideDescription>
  ));

  return (
    <SlideContainer bgImg={bgImg || null} fntColor={fntColor || null} key={uuidv4()}>
      {setImageOrder(id, image)}
      <SlideInfoContainer>
        <SlideHeadDesc headColor={headColor || null} >{headDesc}</SlideHeadDesc>
        <SlideTitle>{title}</SlideTitle>
        <SlideButton>Coming soon</SlideButton>
        <SlideDescriptionContainer>
          {renderDesctiption}
        </SlideDescriptionContainer>
      </SlideInfoContainer>
    </SlideContainer>
  )
});

const AppAdvantages = () => {
  return (
    <AdvantagesSection>
      <AdvantagesTitle>Ditch your crypto exchange.</AdvantagesTitle>
      {renderSlides}
    </AdvantagesSection>
  )
};

export default AppAdvantages;

