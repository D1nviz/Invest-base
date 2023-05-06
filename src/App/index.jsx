import AppHeader from "../AppHeader";
import MainPage from "../pages/MainPage";
import { Wrapper } from "../styles";
import AppFooter from "../AppFooter";
const App = () => {
  return (
    <>
      <AppHeader />
      <Wrapper>
        <MainPage/>
      </Wrapper>
      <AppFooter />

    </>
  );
};

export default App;
