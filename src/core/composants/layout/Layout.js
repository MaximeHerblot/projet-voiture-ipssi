import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/marques"}>Marques</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/voitures"}>Listes des voitures</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/voitures/creation"}>Création d'une voiture</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {/* <Link to={"/voitures/modifier"}>
                    Modification d'une voiture
                </Link> */}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Layout;
