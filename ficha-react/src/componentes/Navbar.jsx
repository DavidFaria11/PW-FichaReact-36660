import { NavLink } from "react-router-dom";

export default function Navbar() {
  const estiloLink = ({ isActive }) => ({
    color: isActive ? "#61DAFB" : "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "8px",
    background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        padding: "16px 28px",
        background: "#1E3A5F",
        alignItems: "center",
      }}
    >
      <NavLink to="/" style={estiloLink}>Início</NavLink>
      <NavLink to="/sobre" style={estiloLink}>Sobre</NavLink>
      <NavLink to="/estudantes" style={estiloLink}>Estudantes</NavLink>
      <NavLink to="/registo" style={estiloLink}>Registo</NavLink>
      <NavLink to="/notas" style={estiloLink}>Notas</NavLink>
    </nav>
  );
}