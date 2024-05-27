import Navigation from "./Navigation";
import SubHeader from "./SubHeader/Main";
import { mainSubHeader, pageSubHeader } from "./SubHeader/constants";

function Header(props) {
  return (
    <>
      <Navigation {...props} />
      <SubHeader data={props.page === "main" ? mainSubHeader : pageSubHeader} />
    </>
  );
}

export default Header;
