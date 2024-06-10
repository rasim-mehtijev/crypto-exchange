import React from "react";
import Table from "react-bootstrap/Table";
import { getAssets } from "../api/assets";
import { coinDataFormat } from "./utils";
import PriceTag from "../PriceTag";
import { useDispatch } from "react-redux";
import { setErrorMessage, setCoinData } from "../service/state";

function CoinList() {
  console.log("CoinList");

  const [coinList, setCoinList] = React.useState([]);

  const dispatch = useDispatch();

  const handleOnClick = (coin) => {
    dispatch(setCoinData(coin));
  };

  React.useEffect(() => {
    getAssets()
      .then((json) => setCoinList(json.data))
      .catch((error) => dispatch(setErrorMessage(error)));
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP (24H)</th>
            <th>Supply</th>
            <th>Volume (25H)</th>
            <th>Change (24H)</th>
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => {
            const formatedCoin = coinDataFormat(coin);
            return (
              <tr key={formatedCoin.id} onClick={() => handleOnClick(coin)}>
                <td>{formatedCoin.rank}</td>
                <td>{formatedCoin.name}</td>
                <td>
                  <PriceTag value={formatedCoin.priceUsd} />
                </td>
                <td>
                  <PriceTag value={formatedCoin.marketCapUsd} />
                </td>
                <td>
                  <PriceTag value={formatedCoin.vwap24Hr} />
                </td>
                <td>
                  <PriceTag value={formatedCoin.supply} />
                </td>
                <td>
                  <PriceTag value={formatedCoin.volumeUsd24Hr} />
                </td>
                <td>{formatedCoin.changePercent24Hr}%</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default CoinList;
