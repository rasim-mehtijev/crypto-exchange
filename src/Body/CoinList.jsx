import React from "react";
import Table from "react-bootstrap/Table";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";

function CoinList({ setPage }) {
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [coinData, setCoinData] = React.useState({});

  const handleOnClick = (name) => {
    setShowInfoModal(true);
    setCoinData({ name });
  };

  return (
    <>
      <Table striped bordered hover>
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
          <tr onClick={() => handleOnClick("Bitcoin")}>
            <td>1</td>
            <td>Bitcoin</td>
            <td>680000</td>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XXXXX</td>
          </tr>
        </tbody>
      </Table>
      <CoinInfoModal
        show={showInfoModal}
        setShow={setShowInfoModal}
        coinData={coinData}
        setPage={setPage}
      />
    </>
  );
}

export default CoinList;
