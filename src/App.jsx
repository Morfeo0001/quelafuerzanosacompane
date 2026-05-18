import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const NewspaperHeader = () => {
  return (
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
  );
};

const Footer = ({ nombre, clase }) => {
  return (
    <footer className="container-fluid py-4 mt-5 footer-newspaper">
      <div className="container border-top border-bottom border-dark border-3 py-3">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-0">CITY SERIES</h5>
            <p className="small mb-0">Established in 1624</p>
          </div>
          <div className="col-md-4 text-center border-md-start border-md-end border-dark">
            <p className="mb-0 fw-bold text-uppercase">© 2026 {nombre}</p>
            <p className="small mb-0">{clase}</p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0 fst-italic">"The city that never sleeps"</p>
            <p className="newspaper-coords m-0">40.7128° N, 74.0060° W</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <span className="small-caps">Montevideo • Canelones • Uruguay</span>
      </div>
    </footer>
  );
};



const NewsCard = ({ headline, extract, image, category }) => {
  return (
    <Card className="vintage-card h-100 rounded-0">
      <div className="news-category">{category}</div>
      <Card.Img variant="top" src={image} className="vintage-image rounded-0" />
      <Card.Body className="d-flex flex-column text-center px-4">
        <Card.Title className="news-headline">{headline}</Card.Title>
        <Card.Text className="news-extract">{extract}</Card.Text>
        <Button variant="dark" className="mt-auto vintage-btn rounded-0 w-100">
          LEER MÁS
        </Button>
      </Card.Body>
    </Card>
  );
};

const BannerNY = () => {
  return (
    <Container className="mt-5">
      <Card className="banner-vintage bg-dark text-white border-0 rounded-0 overflow-hidden">
        <Card.Img 
          src="https://i.pinimg.com/1200x/c7/f6/98/c7f69821a3b7e03709fe8f6180250d61.jpg" 
          alt="NY" 
          className="vintage-image w-100" 
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center bg-dark bg-opacity-25">
          <Card.Title className="display-4 fw-bold">Nueva York</Card.Title>
          <Card.Text className="fs-5">La ciudad que nunca duerme</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

const CardSection = () => {
   
  const nyDestinations = [
    {
      id: 1,
      headline: "Times Square",
      extract:
        "Conocido por sus rascacielos imponentes y su cultura vibrante, es el corazón latiente de Manhattan.",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhola-nuevayork.com%2Fwp-content%2Fuploads%2F2022%2F12%2Ftimes-square-de-nuit.jpg&f=1&nofb=1&ipt=eabbe7c0b92dd831e575f6f76111ab71afa67104fd2545371a98e8bc91b3ede2",
      category: "THE HEART OF THE THEATER DISTRICT",
    },
    {
      id: 2,
      headline: "Central Park",
      extract:
        "Un escape pacífico de la ciudad. Descubre la serenidad en medio de la metrópolis que nunca duerme.",
      image:
        "https://i.pinimg.com/736x/99/f4/ff/99f4ff74e3a85e274ef4677ddb0e406b.jpg",
      category: "A PEACEFUL ESCAPE",
    },
    {
      id: 3,
      headline: "Statue of Liberty",
      extract:
        "El icónico monumento nacional inaugurado en 1886, símbolo de esperanza e historia en la bahía.",
      image:
        "https://i.pinimg.com/1200x/4d/eb/a0/4deba0a54d9d207feeeaba12f89948c4.jpg",
      category: "ICONIC NATIONAL MONUMENT",
    },
  ];

  return (
    <section className="newspaper-section py-5">
      <Container>
        <div className="newspaper-header text-center mb-5">
          <h2 className="newspaper-main-title">HIGHLIGHTS</h2>
          <p className="date-text mt-1 border-bottom border-top border-dark py-1">
            ESTABLISHED IN 1624 • SPECIAL EDITION
          </p>
        </div>
        <Row className="g-4">
          {nyDestinations.map((dest) => (
            <Col key={dest.id} xs={12} md={4}>
              <NewsCard
                headline={dest.headline}
                extract={dest.extract}
                image={dest.image}
                category={dest.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


function App() {
  return (
    <div className="App">
      <NewspaperHeader />
      <BannerNY />
      <CardSection />
      <Footer nombre="Melina Silveira" clase="6to Año - Ánima" />
    </div>
  );
}

export default App;