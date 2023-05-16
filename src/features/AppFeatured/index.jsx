import { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { useAnimation, useAnimateLock } from "../../hooks/useAnimations";

import {
  FeaturedDescription,
  FeaturedTitle,
  FeaturedText,
  FeaturedItemsContainer,
  FeaturedItem,
  FeaturedSection,
  FeaturedInfoContainer,
  FeaturedLock
} from "./styles";
import { featuredItems } from "../Constants";
import lockTop from "../../resources/lock/top.png";
import lockBottom from "../../resources/lock/bottom.png";

const AppFeatured = () => {
  const topLock = useRef(null);
  const bottomLock = useRef(null);
  const featureRef = useRef();
  const isItemsOnScreen = useOnScreen(featureRef);
  const isLockOnScreen = useOnScreen(topLock);

  useAnimateLock(isLockOnScreen, topLock, bottomLock);
  useAnimation(isItemsOnScreen, featureRef);

  return (
    <FeaturedSection >
      <FeaturedInfoContainer>
        <FeaturedLock>
          <img ref={topLock} className="top" src={lockTop} alt="" />
          <img ref={bottomLock} className="main" src={lockBottom} alt="" />
        </FeaturedLock>
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