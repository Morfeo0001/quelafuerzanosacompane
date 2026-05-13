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
}

export default App
