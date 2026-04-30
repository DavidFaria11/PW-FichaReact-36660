import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Estudantes from "./pages/Estudantes.jsx";
import PerfilEstudante from "./pages/PerfilEstudante.jsx";
import Registo from "./pages/Registo.jsx";
import Notas from "./pages/Notas.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/estudantes" element={<Estudantes />} />
        <Route path="/registo" element={<Registo />} />
        <Route path="/estudantes/:id" element={<PerfilEstudante />} />
        <Route path="/notas" element={<Notas />} />
      </Routes>
    </BrowserRouter>
  );
}