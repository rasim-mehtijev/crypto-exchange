import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../../providers/AppProvider";

function Main({ data }) {
  console.log("Main");

  const { switchHighLights, globalData } = React.useContext(AppContext);

  if (!switchHighLights) return null;

  return (
    <Container>
      <Row>
        {data.map(({ children, property, Component }, index) => (
          <Col key={index}>
            {children} <Component value={globalData[property]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Main;
