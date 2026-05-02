export default function Home() {
  return (
    <main style={{ padding: "40px 24px" }}>
      <section className="hero">
        <div>
          <span className="tag">Programação Web</span>

          <h1>Portal da Turma</h1>

          <p>
            Bem-vindo ao portal da turma. Aqui podes consultar estudantes,
            navegar entre páginas, registar dados e gerir notas.
          </p>

          <div className="hero-botoes">
            <a href="/estudantes" className="botao-principal">
              Ver Estudantes
            </a>

            <a href="/notas" className="botao-secundario">
              Gerir Notas
            </a>
          </div>
        </div>
      </section>

      <section className="cards-home">
        <div className="card-home">
          <h2>👨‍🎓 Estudantes</h2>
          <p>Consulta a lista de estudantes e vê o perfil individual de cada aluno.</p>
        </div>

        <div className="card-home">
          <h2>📝 Registo</h2>
          <p>Preenche um formulário controlado com pré-visualização em tempo real.</p>
        </div>

        <div className="card-home">
          <h2>📊 Notas</h2>
          <p>Adiciona notas, vê classificações e calcula a média da turma.</p>
        </div>
      </section>
    </main>
  );
}