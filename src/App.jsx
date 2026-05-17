import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";

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

const CardSection = () => {
  const nyDestinations = [
    {
      id: 1,
      headline: "Times Square",
      extract:
        "Conocido por sus rascacielos imponentes y su cultura vibrante, es el corazón latiente de Manhattan.",
      image:
        "https://images.unsplash.com/photo-1534430480872-3498384e54e6?auto=format&fit=crop&q=80&w=800",
      category: "THE HEART OF THE THEATER DISTRICT",
    },
    {
      id: 2,
      headline: "Central Park",
      extract:
        "Un escape pacífico de la ciudad. Descubre la serenidad en medio de la metrópolis que nunca duerme.",
      image:
        "https://images.unsplash.com/photo-1595161048683-11b025345719?auto=format&fit=crop&q=80&w=800",
      category: "A PEACEFUL ESCAPE",
    },
    {
      id: 3,
      headline: "Statue of Liberty",
      extract:
        "El icónico monumento nacional inaugurado en 1886, símbolo de esperanza e historia en la bahía.",
      image:
        "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?auto=format&fit=crop&q=80&w=800",
      category: "ICONIC NATIONAL MONUMENT",
    },
  ];

  return (
    <section className="newspaper-section py-5">
      <Container>
        {/* Encabezado */}
        <div className="newspaper-header text-center mb-5">
          <p className="vol-text mb-1">THE CITY THAT NEVER SLEEPS</p>
          <h2 className="newspaper-main-title">NEW YORK CITY HIGHLIGHTS</h2>
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
    <div className="app-wrapper">
      {/* Acá irá el código de tu compañera (Navbar y Banner principal) */}

      <CardSection />

      {/* Acá irá el código del Footer */}
    </div>
  );
}

export default App;
