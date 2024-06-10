import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CoinInfo from "./CoinInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCoinData } from "../../service/state";

function CoinInfoModal() {
  console.log("CoinInfoModal");
  const navigate = useNavigate();

  const coinData = useSelector((state) => state.coinData);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setCoinData(null));
    navigate("/coin/" + coinData.id);
  };

  return (
    <Modal
      size="lg"
      show={!!coinData}
      onHide={() => dispatch(setCoinData(null))}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>{!!coinData && <CoinInfo coinData={coinData} />}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="mx-auto" onClick={handleOnClick}>
          More Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CoinInfoModal;
