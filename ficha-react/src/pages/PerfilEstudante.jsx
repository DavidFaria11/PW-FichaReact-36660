import { useParams, Link } from "react-router-dom";

const estudantes = [
  { id: 1, nome: "Ana Costa", curso: "Eng. Informática", ano: 1, email: "ana@uni.pt" },
  { id: 2, nome: "Bruno Silva", curso: "Eng. Informática", ano: 1, email: "bruno@uni.pt" },
  { id: 3, nome: "Carla Mendes", curso: "Ciências da Computação", ano: 2, email: "carla@uni.pt" },
];

export default function PerfilEstudante() {
  const { id } = useParams();

  const estudante = estudantes.find(e => e.id === Number(id));

  if (!estudante) {
    return <p>Estudante não encontrado.</p>;
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>{estudante.nome}</h1>
      <p>{estudante.curso}</p>
      <p>Ano: {estudante.ano}</p>
      <p>Email: {estudante.email}</p>

      <Link to="/estudantes">← Voltar</Link>
    </main>
  );
}