import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import useAnimation from "../../hooks/useAnimations";
import {
    FeaturedDescription,
    FeaturedTitle,
    FeaturedText,
    FeaturedItemsContainer,
    FeaturedItem,
    FeaturedSection,
    FeaturedInfoContainer
} from "./styles";
import { featuredItems } from "../Constants";

const AppFeatured = () => {
    const featureRef = useRef();
    const isOnScreen = useOnScreen(featureRef, "-100px")
    useAnimation(isOnScreen, featureRef);

    return (
        <FeaturedSection >
            <FeaturedInfoContainer>
                <FeaturedDescription>
                    <FeaturedTitle>Path is a registered investment advisor.</FeaturedTitle>
                    <FeaturedText>As a registered and regulated crypto robo-investment advisor, our responsibility is to
                        keep our clients’ best interests at heart.</FeaturedText>
                </FeaturedDescription>
            </FeaturedInfoContainer>
            <FeaturedItemsContainer ref={featureRef}>
                <FeaturedItem >Featured in</FeaturedItem>
                {featuredItems.map((item, i) => (
                    <FeaturedItem key={i}>
                        <img src={item} alt={`featured item ${i + 1}`} />
                    </FeaturedItem>
                ))}
            </FeaturedItemsContainer>
        </FeaturedSection>
    )
};

export default AppFeatured;