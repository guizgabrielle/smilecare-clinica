import React, { useState } from 'react';

export default function Agendamento() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', servico: '', data: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Agendamento enviado com sucesso!');
  };

  return (
    <section className="agendamento-section">
      <h2>
        <span role="img" aria-label="agenda">📅</span> Agende sua consulta
      </h2>
      <p className="agendamento-desc">
        Preencha os campos abaixo e garanta seu atendimento com nossos especialistas.
      </p>
      <form className="agendamento-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input name="nome" id="nome" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="email" placeholder="Seu melhor e-mail" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input name="telefone" id="telefone" placeholder="(XX) XXXXX-XXXX" value={form.telefone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="servico">Serviço desejado</label>
          <select name="servico" id="servico" value={form.servico} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="limpeza">Limpeza</option>
            <option value="clareamento">Clareamento</option>
            <option value="canal">Tratamento de Canal</option>
            <option value="ortodontia">Ortodontia</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="data">Data</label>
          <input type="date" name="data" id="data" value={form.data} onChange={handleChange} required />
        </div>
        <button className="btn-agendar" type="submit">
          <span role="img" aria-label="enviar">✅</span> Enviar Agendamento
        </button>
      </form>
    </section>
  );
}
