import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/base.css';
import linkedin from'./img/linkedin.png';


//Fix linked in logo 
//Fix background on mobile

function NavBarComp() {

  return (
    <div className="navBarFont" >
      <Navbar bg="light" expand="lg"  className="someclass">
        <div className="noMar noPad fullWidth">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fullWidth">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/experiences">Experiences</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/updates">Updates</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/WordScore">Word_Score</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <a href="https://www.linkedin.com/in/andrew-william-elder/">
            <img className="linkedSize imageAlight" src={linkedin} alt="LinkedIn"></img>
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

//width="auto" height="40vh"

export default NavBarComp;