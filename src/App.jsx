import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <>

  
    <header className="newspaper-navbar">

        <div className="top-line">
          <span>NEW YORK, US</span>

          <h2>City Series</h2>

          <span>40.7128° N / 74.0060° W</span>
        </div>
         <div className="main-title">
          <h1>NEW YORK</h1>
        </div>

        <nav className="menu">
          <a href="#">Inicio</a>
          <a href="#">Historia</a>
          <a href="#">Lugares</a>
          <a href="#">Contacto</a>
        </nav>

      </header>

   

    <Container>
        <Card className="bg-dark text-white">
      <Card.Img src="https://i.pinimg.com/1200x/f2/2b/2f/f22b2fd09e28ccc7d2c7bf8acda4cc78.jpg" alt="NY" />
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
