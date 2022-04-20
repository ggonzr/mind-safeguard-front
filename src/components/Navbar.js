/**
 * Navigation bar, two elements: About & DASS
 */

import { Navbar, Container, Nav } from "react-bootstrap";
import "../css/Bar.css";

const NavbarComponent = () => {
    return (
        <Navbar className="color" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Detección temprana de potenciales trastornos depresivos</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About us</Nav.Link>
                    <Nav.Link href="#dass">DASS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

// Export component
export default NavbarComponent;