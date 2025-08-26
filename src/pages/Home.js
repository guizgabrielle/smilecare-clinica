import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h2>Bem-vindo à SmileCare!</h2>
      <p>Seu sorriso é a nossa prioridade. Oferecemos atendimento humanizado, tecnologia de ponta e profissionais especializados.</p>
      <div className="servicos-destaque">
        <div>
          <span role="img" aria-label="limpeza">🪥</span>
          <h3>Limpeza</h3>
          <p>Remoção de placa e tártaro para saúde bucal.</p>
        </div>
        <div>
          <span role="img" aria-label="clareamento">✨</span>
          <h3>Clareamento</h3>
          <p>Deixe seu sorriso mais branco e radiante.</p>
        </div>
        <div>
          <span role="img" aria-label="canal">🦷</span>
          <h3>Tratamento de Canal</h3>
          <p>Recupere dentes comprometidos com segurança.</p>
        </div>
      </div>
      
      <div className="depoimentos">
        <h3>Depoimentos</h3>
        <blockquote>
          "Atendimento excelente, recomendo a todos!"<br />
          <span>- Maria S.</span>
        </blockquote>
        <blockquote>
          "Equipe muito atenciosa e ambiente acolhedor."<br />
          <span>- João P.</span>
        </blockquote>
      </div>
    </section>
  );
}
