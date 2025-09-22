
const icones = {
  "Limpeza Dental": "🪥",
  "Clareamento": "✨",
  "Implante": "🦷"
};

export default function Servicos() {
  const servicos = [
    { id: 1, nome: "Limpeza Dental", preco: "R$ 150,00" },
    { id: 2, nome: "Clareamento", preco: "R$ 500,00" },
    { id: 3, nome: "Implante", preco: "R$ 2.000,00" },
  ];

  return (
    <section className="servicos-section">
      <h2 className="servicos-titulo">Nossos Serviços</h2>
      <div className="servicos-cards">
        {servicos.map(s => (
          <div className="servico-card" key={s.id}>
            <span className="servico-icone" role="img" aria-label={s.nome}>{icones[s.nome]}</span>
            <h3>{s.nome}</h3>
            <p className="servico-preco">{s.preco}</p>
            <button className="servico-btn">Saiba mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
