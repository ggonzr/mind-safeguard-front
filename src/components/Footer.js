/**
 * Footer info
 */
import {Container, Navbar} from "react-bootstrap";
import "../css/Bar.css";

const Footer = () => {
    return (
        <Navbar className="color footer" variant="dark">
            <Container>
                <Navbar.Brand>
                    Proyecto de curso - Análisis con Machine Learning - Diseño web realizado con ❤ por <a href="https://github.com/ggonzr" target="_blank" rel="noreferrer">@ggonzr</a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

// Export component
export default Footer;