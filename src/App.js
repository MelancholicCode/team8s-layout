import styled from "styled-components";
import Header from "./components/Header";
import ProfilePage from "./components/pages/ProfilePage";

const AppWrapper = styled.div`
background: #26292B;
min-height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Header/>
      <ProfilePage/>
    </AppWrapper>
  );
}

export default App;