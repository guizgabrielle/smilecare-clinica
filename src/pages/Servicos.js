import React from 'react';

export default function Servicos() {
  const servicos = [
    { id: 1, nome: "Limpeza Dental", preco: "R$ 150,00" },
    { id: 2, nome: "Clareamento", preco: "R$ 500,00" },
    { id: 3, nome: "Implante", preco: "R$ 2.000,00" },
  ];

  return (
    <section>
      <h2>Serviços</h2>
      <ul>
        {servicos.map(s => (
          <li key={s.id}>{s.nome} - {s.preco}</li>
        ))}
      </ul>
    </section>
  );
}
