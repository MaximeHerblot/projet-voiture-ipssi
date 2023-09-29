import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { useContext } from "react";
//import LoginContext from "../store/login-context";

const Layout = () => {
 // const login = useContext(LoginContext);

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={"/"}>Page d'acceuil</NavLink>
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

            {/* Barre de recherche tout à droite */}
          <div className="col-md-6 ms-auto">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recherche"
                />
                <button type="submit" className="btn btn-outline-light">
                  Rechercher
                </button>
              </div>
            </form>
          </div>
          {/* Fin de la barre de recherche */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Layout;
