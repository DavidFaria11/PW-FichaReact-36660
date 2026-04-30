import { Link } from "react-router-dom";

function CartaoUtilizador({ nome, curso, ano, destaque }) {
  return (
    <div className={`cartao ${destaque ? "cartao-destaque" : ""}`}>
      {destaque && <span className="badge">Caloiro</span>}

      <h2>{nome}</h2>
      <p>{curso}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}

const estudantes = [
  { id: 1, nome: "Ana Costa", curso: "Eng. Informática", ano: 1 },
  { id: 2, nome: "Bruno Silva", curso: "Eng. Informática", ano: 1 },
  { id: 3, nome: "Carla Mendes", curso: "Ciências da Computação", ano: 2 },
];

export default function Estudantes() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Estudantes</h1>

      <div className="lista-cartoes">
        {estudantes.map((estudante) => (
          <Link
            key={estudante.id}
            to={`/estudantes/${estudante.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CartaoUtilizador
              nome={estudante.nome}
              curso={estudante.curso}
              ano={estudante.ano}
              destaque={estudante.ano === 1}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}