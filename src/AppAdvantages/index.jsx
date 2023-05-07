import { 
   AdvantagesSection,
   AdvantagesTitle,
   ProductHeader,
   SlideButton,
   SlideContainer,
   SlideDescription,
   SlideDescriptionContainer,
   SlideImgContainer,
   SlideInfoContainer, 
   SlideTitle,
   } from "../styles";
   import firstSlide from "../resources/advantage-1.png";
   import advantageIcon from "../resources/advantageIcon1.webp"

const AppAdvantages = () => {
   return (
      <AdvantagesSection>
         <AdvantagesTitle>Ditch your crypto exchange.</AdvantagesTitle>
         <SlideContainer>
            <SlideInfoContainer>
               <ProductHeader>Let us build your portfolio</ProductHeader>
               <SlideTitle>Automate your investing with Path Managed Portfolios.</SlideTitle>
               <SlideButton>Coming soon</SlideButton>
               <SlideDescriptionContainer>
                  <SlideDescription><img src={advantageIcon} alt="" /><span>Take a risk assessment</span></SlideDescription>
                  <SlideDescription><img src={advantageIcon} alt="" /><span>Get your personalized portfolio</span></SlideDescription>
                  <SlideDescription><img src={advantageIcon} alt="" /><span>Sit back and let us do the work</span></SlideDescription>
               </SlideDescriptionContainer>
            </SlideInfoContainer>
            <SlideImgContainer><img src={firstSlide} alt="" /></SlideImgContainer>
         </SlideContainer>
      </AdvantagesSection>
   )
};

export default AppAdvantages;

