import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Denuncias from "./pages/Denucias";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import "../src/styles/style.css";
import { UsuarioLogadoProvider } from "./contexts/contextAuth";

function App() {
  return (
    <>
      <UsuarioLogadoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="denuncia" element={<Denuncias />}/>
          <Route path="/esqueci-senha" element={<EsqueceuSenha />} />
        </Routes>
      </UsuarioLogadoProvider>
    </>
  );
}
export default App;
