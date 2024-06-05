import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CoinInfo from "./CoinInfo";
import { useNavigate } from "react-router-dom";

function CoinInfoModal({ show, setShow, coinData }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setShow(false);
    navigate("/coin/" + coinData.id);
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CoinInfo coinData={coinData} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="mx-auto" onClick={handleOnClick}>
          More Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CoinInfoModal;
