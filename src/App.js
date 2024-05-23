import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import SubHeader from "./SubHeader";
import CoinList from "./CoinList";

function App() {
  return (
    <Container>
      <Header />
      <SubHeader />
      <CoinList />
    </Container>
  );
}

export default App;
