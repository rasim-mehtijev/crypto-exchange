import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";

function SearchSideBar({ showSideBar, setShowSideBar }) {
  const handleClose = () => setShowSideBar(false);

  return (
    <Offcanvas show={showSideBar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm closeSideBar={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchSideBar;
