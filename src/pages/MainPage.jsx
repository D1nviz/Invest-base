import AppBanner from "../features/AppBanner";
import AppFeatured from "../features/AppFeatured";
import AppCards from "../features/AppCards";
import AppAdvantages from "../features/AppAdvantages";
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