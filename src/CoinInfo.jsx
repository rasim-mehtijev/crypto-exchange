import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CoinInfo() {
  return (
    <Row>
      <Col>
        <Row>
          <Col>Logo</Col>
          <Col>Bitcoin</Col>
        </Row>
      </Col>
      <Col>
        <div>High 700000</div>
        <div>Low 670000</div>
      </Col>
      <Col>
        <div>Avarage 690000</div>
        <div>Change -3%</div>
      </Col>
    </Row>
  );
}

export default CoinInfo;
