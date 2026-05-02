import { useState } from "react";

export default function Registo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ano, setAno] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    alert(JSON.stringify({ nome, email, ano }));

    setNome("");
    setEmail("");
    setAno(1);
  }

  return (
    <main className="pagina-registo">
      <div className="card-registo">
        <h1>Registo de </h1>
        <h1>Estudante</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="O teu nome"
            />
          </div>

          <div className="campo">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Ano</label>
            <select value={ano} onChange={(e) => setAno(Number(e.target.value))}>
              <option value={1}>1.º Ano</option>
              <option value={2}>2.º Ano</option>
              <option value={3}>3.º Ano</option>
            </select>
          </div>

          <button type="submit" className="botao-registo">
            Registar
          </button>
        </form>

        {nome && (
          <div className="preview">
            <h3>Pré-visualização</h3>
            <p>{nome} | {email} | Ano {ano}</p>
          </div>
        )}
      </div>
    </main>
  );
}