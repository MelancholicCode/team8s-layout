import styled from "styled-components";
import Header from "./components/Header";

const AppWrapper = styled.p`
background: #26292B;
min-height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Header/>
    </AppWrapper>
  );
}

export default App;