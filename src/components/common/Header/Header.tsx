import HeaderBasket from "../../eCommerce/HeaderBasket/HeaderBasket";

import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerLogo}>
          <span className={styles.our}>our</span>
          <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket/>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Categories">Categories</Nav.Link>
              <Nav.Link href="#Categories">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
