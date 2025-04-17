
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Denuncias from './pages/Denucias'
import RotaProtegida from './components/RotaProtegida'
import EsqueceuSenha from './pages/EsqueceuSenha'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/style.css"



// function App() {
  const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='registro' element={<Registro />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='denuncia' element={<RotaProtegida> <Denuncias /> </RotaProtegida>} />
        <Route path="/esqueci-senha" element={<EsqueceuSenha />} />
      </Routes>
    </>
  )
}


export default App
