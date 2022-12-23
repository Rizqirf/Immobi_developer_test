import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to="/">
          Immobi Developer Test
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/">
                Karyawan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="jabatan">
                Jabatan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/departemen">
                Departemen
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Dropdown>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          // menuVariant="dark"
          title={"tes@email.com"}
          // className="align-items-center"
        >
          {/* <Dropdown.Item href="#/action-1">Log In</Dropdown.Item> */}
          <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <div style={{ width: "5%" }}></div>
    </nav>
  );
}
