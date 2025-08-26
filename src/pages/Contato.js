import React from 'react';

function Mapa() {
  return (
    <div className="mapa-container">
      <h3 className="mapa-titulo">
        <span role="img" aria-label="localização">📍</span> Onde Estamos
      </h3>
      <iframe
        title="Mapa da Clínica"
        src="https://www.google.com/maps?q=Av+Paulista,+1000,+São+Paulo&output=embed"
        width="100%"
        height="320"
        style={{border: 0, borderRadius: '16px', boxShadow: '0 4px 24px rgba(33,150,243,0.13)'}}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function Contato() {
  return (
    <section className="contato-section">
      <h2 className="contato-titulo">
        <span role="img" aria-label="telefone">📞</span> Fale Conosco
      </h2>
      <div className="contato-info">
        <div>
          <span role="img" aria-label="telefone" className="contato-icon">☎️</span>
          <span>(11) 99999-9999</span>
        </div>
        <div>
          <span role="img" aria-label="email" className="contato-icon">✉️</span>
          <span>contato@smilecare.com</span>
        </div>
        <div>
          <span role="img" aria-label="endereço" className="contato-icon">🏢</span>
          <span>Av. Paulista, 1000 - São Paulo</span>
        </div>
      </div>
      <Mapa />
    </section>
  );
}
