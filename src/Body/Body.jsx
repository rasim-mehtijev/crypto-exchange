import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";

function Body(props) {
  return (
    <>
      {props.page === "main" ? (
        <CoinList {...props} />
      ) : (
        <CoinInfo coinData={{ name: "TestCoin" }} />
      )}
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;
