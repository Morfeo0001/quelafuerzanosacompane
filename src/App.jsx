import React from 'react'
import './App.css'

const Footer = ({ nombre, clase }) => {
  return (
    <footer className="container-fluid py-4 mt-5 footer-newspaper">
      <div className="container border-top border-bottom border-dark border-3 py-3">
        <div className="row align-items-center">
          {/* Lado Izquierdo: Estilo Editorial */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-0">CITY SERIES</h5>
            <p className="small mb-0">Established in 1624</p>
          </div>
          <div className="col-md-4 text-center border-md-start border-md-end border-dark">
            <p className="mb-0 fw-bold text-uppercase">© 2026 {nombre}</p>
            <p className="small mb-0">{clase}</p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0 italic">"The city that never sleeps"</p>
            <p className="newspaper-coords m-0">40.7128° N, 74.0060° W</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <span className="small-caps">Montevideo • Canelones • Uruguay</span>
      </div>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
    
      <div style={{ minHeight: '60vh' }}>
        <h2 className="text-center mt-5 text-muted">Contenido de la Página</h2>
      </div>
      <Footer nombre="Melina Silveira" clase="6to Año - Ánima" />
    </div>
  )
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import'./index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";

// ==========================================
// SECCIÓN DEL INTEGRANTE 3 (NEITAN) - TARJETAS NY
// ==========================================

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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhola-nuevayork.com%2Fwp-content%2Fuploads%2F2022%2F12%2Ftimes-square-de-nuit.jpg&f=1&nofb=1&ipt=eabbe7c0b92dd831e575f6f76111ab71afa67104fd2545371a98e8bc91b3ede2",
      category: "THE HEART OF THE THEATER DISTRICT",
    },
    {
      id: 2,
      headline: "Central Park",
      extract:
        "Un escape pacífico de la ciudad. Descubre la serenidad en medio de la metrópolis que nunca duerme.",
      image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=600",
      category: "A PEACEFUL ESCAPE",
    },
    {
      id: 3,
      headline: "Statue of Liberty",
      extract:
        "El icónico monumento nacional inaugurado en 1886, símbolo de esperanza e historia en la bahía.",
      image:
        "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?q=80&w=600",
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
    </section>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      {/* Acá lalaNavbar*/}
      <CardSection />
      {/* Acá Footer */}
    </div>
  );
}

export default App;
