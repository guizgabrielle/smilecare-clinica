import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Agendamento from './pages/Agendamento';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo">
          <Link to="/">
          <span role="img" aria-label="tooth">🦷</span> SmileCare
          </Link>
          
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/agendamento">Agendamento</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <footer className="footer">
        <div>
          <span role="img" aria-label="location">📍</span> Rua do Sorriso, 123 - Centro, Cidade
        </div>
        <div>
          <span role="img" aria-label="phone">📞</span> (11) 99999-9999
        </div>
        <div>
          © 2025 SmileCare Clínica Odontológica
        </div>
      </footer>
    </Router>
  );
}
