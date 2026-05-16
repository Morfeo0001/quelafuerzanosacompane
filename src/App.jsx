import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
   return (
      <div className="d-flex flex-column min-vh-100">
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
         <main className="flex-grow-1">
            <Container>
               <Card className="bg-dark text-white">
                  <Card.Img
                     src="https://i.pinimg.com/1200x/f2/2b/2f/f22b2fd09e28ccc7d2c7bf8acda4cc78.jpg"
                     alt="NY"
                  />
                  <Card.ImgOverlay>
                     <Card.Title>Nueva York</Card.Title>
                     <Card.Text>
                        Descubre la energía inigualable de Manhattan, desde las
                        luces brillantes de Times Square hasta la serenidad de
                        Central Park.
                     </Card.Text>
                     <Card.Text>La ciudad que nunca duerme</Card.Text>
                  </Card.ImgOverlay>
               </Card>
            </Container>

            <Container>
               <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </Card>
            </Container>
         </main>
      </div>
   );
}

export function Footer() {
   return (
      <footer
         className="py-4 mt-auto"
         style={{
            backgroundColor: "#f8f5f0",
            borderTop: "2px solid #333",
         }}
      >
         <Container>
            <Row className="align-items-center text-center text-uppercase fw-bold text-dark">
               <Col md={4} className="border-end border-secondary py-2">
                  <h5 className="mb-0 fw-bold" style={{ letterSpacing: "2px" }}>
                     CITY SERIES
                  </h5>
                  <small className="fw-normal text-muted">
                     Established in 1624
                  </small>
               </Col>

               <Col md={4} className="py-2">
                  <div style={{ fontSize: "1rem" }}>© 2026 MELINA SILVEIRA</div>
                  <small className="fw-normal">6to Año - Ánima</small>
               </Col>

               <Col md={4} className="border-start border-secondary py-2">
                  <div
                     className="fst-italic fw-normal"
                     style={{ fontSize: "0.85rem" }}
                  >
                     "The city that never sleeps"
                  </div>
                  <small className="fw-normal text-muted">
                     40.7128° N, 74.0060° W
                  </small>
               </Col>
            </Row>

            <Row className="mt-3">
               <Col className="text-center border-top border-secondary pt-2">
                  <p
                     className="mb-0"
                     style={{ fontSize: "0.7rem", letterSpacing: "4px" }}
                  >
                     MONTEVIDEO • CANELONESs • URUGUAyy
                  </p>
               </Col>
            </Row>
         </Container>
      </footer>
   );
}

export default App;
