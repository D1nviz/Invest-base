import {
  FeaturedDescription,
  FeaturedTitle,
  FeaturedText,
  FeaturedItemsContainer,
  FeaturedItem,
  FeaturedSection,
  FeaturedInfoContainer
} from "./styles";
import {featuredItems} from "../Constants";

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
        {featuredItems.map((item, i) => (
            <FeaturedItem key={i}>
              <img src={item} alt={`featured item ${i+1}`}/>
            </FeaturedItem>
        ))}
      </FeaturedItemsContainer>
    </FeaturedSection>
  )
};

export default AppFeatured;