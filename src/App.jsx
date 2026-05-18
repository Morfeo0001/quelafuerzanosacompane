import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import'./index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <>

  
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

    <Container>
        <Card className="bg-dark text-white">
      <Card.Img src="https://i.pinimg.com/1200x/c7/f6/98/c7f69821a3b7e03709fe8f6180250d61.jpg" alt="NY" />
      <Card.ImgOverlay>
        <Card.Title>Nueva York</Card.Title>
        <Card.Text>
          Descubre la energía inigualable de Manhattan, 
          desde las luces brillantes de Times Square hasta la serenidad de Central Park.
        </Card.Text>
        <Card.Text>La ciudad que nunca duerme</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Container>

   <Container>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </Container>

   <footer className="py-3 my-4 border-top">
  <Container>
    <p className="text-center text-body-secondary">© 2026 Loa Cuatreros , Inc</p>
  </Container>
</footer>
  
    </>
  );
}


export default App;
