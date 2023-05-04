import AppHeader from "../AppHeader";
import AppBanner from "../AppBanner";
import { Wrapper } from "../styles";
const App = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <AppBanner/>
      </Wrapper>
    </>
  );
};

export default App;
