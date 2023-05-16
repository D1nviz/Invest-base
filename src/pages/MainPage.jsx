import AppBanner from "../features/AppBanner";
import AppFeatured from "../features/AppFeatured";
import AppCards from "../features/AppCards";
import AppAdvantages from "../features/AppAdvantages";
import AppInvestmentServices from "../features/AppInvestmentServices";
import AppJoinOurProgram from "../features/AppJoinOurProgram";
import { Wrapper } from "../styles";
const MainPage = () => {
   return (
      <Wrapper>
         <AppBanner />
         <AppFeatured />
         <AppCards />
         <AppAdvantages />
         <AppInvestmentServices />
         <AppJoinOurProgram/>
      </Wrapper>
   )
}

export default MainPage;