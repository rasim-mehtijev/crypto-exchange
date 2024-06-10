import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Body from "./Body";

function App() {
  console.log("App");

  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
