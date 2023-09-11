import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo192.png";
import { Link } from "react-scroll";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height={50} width={140} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end " id="navbar">


            <Nav.Link href="#home" className="fw-bold">
              <Link to="home">Home</Link>
            </Nav.Link>


            {/* <Nav.Link href="#link" className="fw-bold">
              About
            </Nav.Link> */}
            <Nav.Link href="#home" className="fw-bold">
              <Link to="services">Services</Link>
            </Nav.Link>


            <Nav.Link href="#link" className="fw-bold">
              <Link to="projects">Clients</Link>
            </Nav.Link>


            <Nav.Link href="#home" className="fw-bold">
              <Link to="projects">Projects</Link>
            </Nav.Link>


            <Nav.Link href="#link" className="fw-bold">
              <Link to="contact">Contact</Link>
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
