import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//CARDS (Nahuel)

const Card = ({ title, description }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Botón con clase de Bootstrap y una clase tuya */}
      <button className="btn btn-primary custom-btn">Saber más</button>
    </div>
  );
};

// CardSection
const CardSection = () => {
  const services = [
    {
      id: 1,
      title: "Diseño Web",
      description: "Sitios rápidos y responsivos a medida.",
    },
    {
      id: 2,
      title: "Optimización SEO",
      description: "Posicionamos tu página en lo más alto de Google.",
    },
    {
      id: 3,
      title: "Branding y Logos",
      description: "Identidad visual única para destacar tu marca.",
    },
  ];

  return (
    <section className="cards-section">
      <h2 className="cards-title">Nuestros Servicios</h2>
      <div className="cards-grid">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

//APP

function App() {
  return (
    <div className="app-wrapper">
      {/* Navbar y Banner (Integrantes 1 y 2) */}
      <CardSection /> {/* Tu sección */}
      {/* Footer (Integrante 4) */}
    </div>
  );
}

export default App;
