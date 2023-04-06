import styled from "styled-components";
import Header from "./components/Header";
import ProfilePage from "./components/pages/ProfilePage";

const AppWrapper = styled.div`
background-color: #26292B;
min-height: 100vh;
@media (max-width: 768px) {
  background-color: #1A1C22;
}
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