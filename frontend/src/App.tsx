
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Denuncias from './pages/Denucias'
import RotaProtegida from './components/RotaProtegida'
import EsqueceuSenha from './pages/EsqueceuSenha'
import "../src/styles/style.css"
import { UsuarioLogadoProvider } from './contexts/contextAuth'



// function App() {
  const App: React.FC = () => {
  return (
    <>
    <UsuarioLogadoProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='registro' element={<Registro />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='denuncia' element={<RotaProtegida> <Denuncias /> </RotaProtegida>} />
        <Route path="/esqueci-senha" element={<EsqueceuSenha />} />
      </Routes>
      </UsuarioLogadoProvider>
    </>
  )
}


export default App
