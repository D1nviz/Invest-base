import AppHeader from "../AppHeader";
import AppBanner from "../AppBanner";
import AppFeatured from "../AppFeatured";
import { Wrapper } from "../styles";
import AppFooter from "../AppFooter";
const App = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <AppBanner/>
        <AppFeatured/>
      </Wrapper>
      <AppFooter></AppFooter>

    </>
  );
};

export default App;
