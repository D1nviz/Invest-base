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
} from "../styles";
import { slides } from "../Constants";

const renderSlides = slides.map(({ headDesc, title, image, imgPos, description }) => {
   const renderDesctiption = description.map(({ ico, text }) => (
      <SlideDescription key={uuidv4()}><img src={ico} alt="description ico" /><span>{text}</span></SlideDescription>
   ));
   return (
      <SlideContainer key={uuidv4()}>
         {imgPos === "left" ?
            <>
               <SlideImgContainer><img src={image} alt={title} /></SlideImgContainer>
               <SlideInfoContainer>
                  <SlideHeadDesc>{headDesc}</SlideHeadDesc>
                  <SlideTitle>{title}</SlideTitle>
                  <SlideButton>Coming soon</SlideButton>
                  <SlideDescriptionContainer>
                     {renderDesctiption}
                  </SlideDescriptionContainer>
               </SlideInfoContainer>
            </> :
            <>
               <SlideInfoContainer>
                  <SlideHeadDesc>{headDesc}</SlideHeadDesc>
                  <SlideTitle>{title}</SlideTitle>
                  <SlideButton>Coming soon</SlideButton>
                  <SlideDescriptionContainer>
                     {renderDesctiption}
                  </SlideDescriptionContainer>
               </SlideInfoContainer>
               <SlideImgContainer><img draggable={false} src={image} alt={title} /></SlideImgContainer>
            </>
         }
      </SlideContainer>
   )
})
const AppAdvantages = () => {
   return (
      <AdvantagesSection>
         <AdvantagesTitle>Ditch your crypto exchange.</AdvantagesTitle>
         {renderSlides}
      </AdvantagesSection>
   )
};

export default AppAdvantages;

