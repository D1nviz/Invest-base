import AppBanner from "../AppBanner";
import AppFeatured from "../AppFeatured";
import AppCards from "../AppCards";
import AppAdvantages from "../AppAdvantages";
import { Wrapper } from "../styles";
const MainPage = () => {
   return (
      <Wrapper>
         <AppBanner />
         <AppFeatured />
         <AppCards />
         <AppAdvantages />
      </Wrapper>
   )
}

export default MainPage;