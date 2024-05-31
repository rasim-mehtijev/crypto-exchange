import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";

function CoinInfo({ coinData }) {
  const [coinInfo, setCoinInfo] = React.useState({});

  React.useEffect(() => {
    getAssetsById(coinData.id).then((json) => setCoinInfo(json.data));
  }, [coinData.id]);

  return (
    <>
      <Row>
        <Col>
          <div>Rank: {coinInfo.rank}</div>
        </Col>
        <Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>High 700000</div>
          <div>Low 670000</div>
        </Col>
        <Col>
          <div>Avarage {coinInfo.vwap24Hr}</div>
          <div>Change {coinInfo.changePercent24Hr}%</div>
        </Col>
      </Row>
      <Row>
        <Chart coinData={coinData} />
      </Row>
    </>
  );
}

export default CoinInfo;
