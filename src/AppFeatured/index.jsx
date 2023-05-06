import {
   FeaturedDescription,
   FeaturedTitle,
   FeaturedText,
   FeaturedItemsContainer,
   FeaturedItem,
   FeaturedSection,
   FeaturedInfoContainer
} from "../styles";
import cnbc from "../resources/cnbc.png";
import coindesk from "../resources/coindesk.png";
import cointel from "../resources/cointelegraph.png";
import yahoo from "../resources/yahoo.png"
const AppFeatured = () => {
   return (
      <FeaturedSection>
         <FeaturedInfoContainer>
            <FeaturedDescription>
               <FeaturedTitle>Path is a registered investment advisor.</FeaturedTitle>
               <FeaturedText>As a registered and regulated crypto robo-investment advisor, our responsibility is to keep our clients’ best interests at heart.</FeaturedText>
            </FeaturedDescription>
         </FeaturedInfoContainer>
         <FeaturedItemsContainer>
            <FeaturedItem>Featured in</FeaturedItem>
            <FeaturedItem><img src={cnbc} alt="" /></FeaturedItem>
            <FeaturedItem><img src={coindesk} alt="" /></FeaturedItem>
            <FeaturedItem><img src={cointel} alt="" /></FeaturedItem>
            <FeaturedItem><img src={yahoo} alt="" /></FeaturedItem>
         </FeaturedItemsContainer>
      </FeaturedSection>
   )
};

export default AppFeatured;