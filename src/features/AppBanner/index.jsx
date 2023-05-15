import { useEffect, useRef } from "react";
import { amimateDesctiption, animateRef } from "../../helpers";
import {
  BannerSection,
  BannerContainer,
  BannerInfo,
  BannerDescription,
  BannerTitle,
  BannerVideo,
  BannerVideoContainer,
} from "./styles";
import { Button } from "../../styles";

const AppBanner = () => {
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    amimateDesctiption(descriptionRef);
    animateRef(titleRef, 200);
    animateRef(videoRef, 50);
  }, []);

  return (
    <BannerSection>
      <BannerContainer>
        <BannerInfo>
          <BannerTitle ref={titleRef} > Meet the <span>future of crypto investing.</span></BannerTitle>
          <BannerDescription ref={descriptionRef}>Whether you’re building your first portfolio or you’ve been in crypto for years, Path aims to give you a simpler, smarter way to invest in digital assets.</BannerDescription>
          <Button>Coming soon</Button>
        </BannerInfo>
        <BannerVideoContainer>
          <BannerVideo ref={videoRef} src="https://player.vimeo.com/video/770601792?background=1&autoplay=1&loop=1&autopause=0"></BannerVideo>
        </BannerVideoContainer>
      </BannerContainer>
    </BannerSection>
  )
};

export default AppBanner;