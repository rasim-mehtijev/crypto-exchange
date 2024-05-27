import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main({ data }) {
  return (
    <Container>
      <Row>
        {data.map(({ children }) => (
          <Col>{children}</Col>
        ))}
      </Row>
    </Container>
  );
}

export default Main;
