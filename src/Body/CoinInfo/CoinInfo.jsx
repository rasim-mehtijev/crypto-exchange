import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "./Chart";
import { getAssetsById } from "../../api/assets";
import "./coinInfo.css";
import PriceTag from "../../PriceTag";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "../../service/state";

function CoinInfo({ coinData }) {
  console.log("CoinInfo");
  const [coinInfo, setCoinInfo] = React.useState({});
  const [priceHL, setPriceHL] = React.useState({
    high: 0,
    low: 0,
  });

  const dispatch = useDispatch();

  const { id, period } = useParams();

  React.useEffect(() => {
    getAssetsById(coinData?.id || id)
      .then((json) => setCoinInfo(json.data))
      .catch((error) => dispatch(setErrorMessage(error.message)));
  }, [coinData?.id, id, dispatch]);

  return (
    <>
      <Row>
        <Col>
          <div className="rank">Rank: {coinInfo.rank}</div>
        </Col>
        <Col>
          <Row>
            <Col>Logo</Col>
            <Col>{coinData?.name}</Col>
          </Row>
        </Col>
        <Col>
          <div>
            High <PriceTag value={priceHL.high} />
          </div>
          <div>
            Low <PriceTag value={priceHL.low} />
          </div>
        </Col>
        <Col>
          <div>
            Avarage <PriceTag value={coinInfo.vwap24Hr} />
          </div>
          <div>Change {coinInfo.changePercent24Hr}%</div>
        </Col>
      </Row>
      <Row>
        <Chart
          coinData={coinData || { id }}
          periodParams={period}
          setPriceHL={setPriceHL}
        />
      </Row>
    </>
  );
}

export default CoinInfo;
