import { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import LoginContext from "../../store/login-context";

const Layout = () => {
  const login = useContext(LoginContext);

  const linkStyle = {
    color: "white",        // Couleur du texte en blanc
    textDecoration: "none", // Supprime la décoration du lien
  };

  return (
   
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="centered-nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={"/"}style={linkStyle}>  Page d'acceuil</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/voitures"}style={linkStyle}>  Listes des voitures</NavLink>
            </Nav.Link>
            {login.logged && (
              <Nav.Link>
                <NavLink to={"/voitures/creation"}style={linkStyle}>
                  Création d'une voiture
                </NavLink>
              </Nav.Link>
            )}
            <Nav.Link>
              {login.email === "" && (
                <NavLink to={"/login"}style={linkStyle}> Se connecter</NavLink>
              )}
              {login.email !== "" && (
                <>
                  <span>{login.email}</span>
                  <NavLink to={"/logout"}>Se déconnecter</NavLink>
                </>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Layout;
