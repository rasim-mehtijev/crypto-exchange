import Navigation from "./Navigation";
import SubHeader from "./SubHeader/Main";
import { mainSubHeader } from "./SubHeader/constants";
import { useMatch } from "react-router-dom";

function Header(props) {
  const match = useMatch("/");

  return (
    <>
      <Navigation {...props} />
      {match && <SubHeader data={mainSubHeader} />}
    </>
  );
}

export default Header;
