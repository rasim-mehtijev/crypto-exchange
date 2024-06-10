import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import ErrorModal from "../ErrorModal";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";

function Body(props) {
  console.log("Body");
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinList {...props} />} />
        <Route path="/coin/:id" element={<CoinInfo />} />
        <Route path="/coin/:id/:period" element={<CoinInfo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SearchSideBar {...props} />
      <ErrorModal />
      <CoinInfoModal />
    </>
  );
}

export default Body;
