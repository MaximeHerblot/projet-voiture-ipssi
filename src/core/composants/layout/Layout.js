import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/voitures"}>Listes des voitures</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/voitures/creation"}>
                Création d'une voiture
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Layout;
