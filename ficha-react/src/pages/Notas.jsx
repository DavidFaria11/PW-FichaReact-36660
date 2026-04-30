import { useState } from "react";

function FormularioNota({ onAdicionarNota }) {
  const [estudante, setEstudante] = useState("");
  const [nota, setNota] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (estudante.trim() === "" || nota === "") {
      alert("Preenche todos os campos.");
      return;
    }

    if (Number(nota) < 0 || Number(nota) > 20) {
      alert("A nota deve estar entre 0 e 20.");
      return;
    }

    onAdicionarNota({
      estudante,
      nota: Number(nota),
    });

    setEstudante("");
    setNota("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <input
        value={estudante}
        onChange={(e) => setEstudante(e.target.value)}
        placeholder="Nome do estudante"
        style={{ padding: "8px", flex: 2 }}
      />

      <input
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        type="number"
        min="0"
        max="20"
        placeholder="Nota (0-20)"
        style={{ padding: "8px", flex: 1 }}
      />

      <button type="submit" style={{ padding: "8px 16px" }}>
        Adicionar
      </button>
    </form>
  );
}

function TabelaNotas({ notas }) {
  function classificar(nota) {
    if (nota >= 18) return "Excelente";
    if (nota >= 14) return "Bom";
    if (nota >= 10) return "Suficiente";
    return "Insuficiente";
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ background: "#1E3A5F", color: "white" }}>
          <th style={{ padding: "10px", textAlign: "left" }}>Estudante</th>
          <th style={{ padding: "10px", textAlign: "center" }}>Nota</th>
          <th style={{ padding: "10px", textAlign: "center" }}>Classificação</th>
        </tr>
      </thead>

      <tbody>
        {notas.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              {item.estudante}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              {item.nota}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
              {classificar(item.nota)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Notas() {
  const [notas, setNotas] = useState([]);

  function adicionarNota(novaNota) {
    setNotas([...notas, novaNota]);
  }

  const media =
    notas.length > 0
      ? notas.reduce((soma, item) => soma + item.nota, 0) / notas.length
      : 0;

  return (
    <main style={{ padding: "24px" }}>
      <h1>Gestão de Notas</h1>

      <FormularioNota onAdicionarNota={adicionarNota} />

      <TabelaNotas notas={notas} />

      {notas.length > 0 && (
        <h3>Média da turma: {media.toFixed(2)}</h3>
      )}
    </main>
  );
}