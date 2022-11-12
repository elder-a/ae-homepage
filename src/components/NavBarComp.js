import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/base.css';

function NavBarComp() {

  return (
    <div className="bottomborder">
      <Navbar bg="light" expand="lg"  className="someclass">
        <Container className="noMar noPad">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/experiences">Experiences</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/dayUpdates">Daily Updates</Nav.Link>
              <Nav.Link href="/gallery">Photo Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavBarComp;