import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";

function Body(props) {
    return (
        <>
            <CoinList />
            <SearchSideBar {...props}/>
        </>
    )
}

export default Body;