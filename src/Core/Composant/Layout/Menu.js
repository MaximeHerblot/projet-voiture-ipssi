
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



 

const Menu = () => {

    return (

        <Navbar expand="lg" bg="dark" data-bs-theme="dark">

            <Container>

                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Link to = { '/'} className="nav-link">Home</Link>
                       
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

}


export default Menu;

