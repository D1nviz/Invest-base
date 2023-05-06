import AppHeader from "../AppHeader";
import AppBanner from "../AppBanner";
import AppFeatured from "../AppFeatured";
import { Wrapper } from "../styles";
const App = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <AppBanner/>
        <AppFeatured/>
      </Wrapper>

    </>
  );
};

export default App;
