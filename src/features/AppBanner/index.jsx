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
  return (
    <BannerSection>
      <BannerContainer>
        <BannerInfo>
          <BannerTitle> Meet the <span>future of crypto investing.</span></BannerTitle>
          <BannerDescription>Whether you’re building your first portfolio or you’ve been in crypto for years, Path aims to give you a simpler, smarter way to invest in digital assets.</BannerDescription>
          <Button>Coming soon</Button>
        </BannerInfo>
        <BannerVideoContainer>
          <BannerVideo src="https://player.vimeo.com/video/770601792?background=1&autoplay=1&loop=1&autopause=0"></BannerVideo>
        </BannerVideoContainer>
      </BannerContainer>
    </BannerSection>
  )
};

export default AppBanner;