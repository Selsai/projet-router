import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="bg-light py-2 border-bottom">
      <Container className="d-flex justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/category/vetements">Vêtements</Nav.Link>
          <Nav.Link as={Link} to="/category/chaussures">Chaussures</Nav.Link>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
