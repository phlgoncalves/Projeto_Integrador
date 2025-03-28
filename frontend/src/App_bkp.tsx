
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Denuncias from './pages/Denucias'
import './styles/style.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='registro' element={<Registro />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='denuncia' element={<Denuncias />} />
      </Routes>
    </>
  )
}

export default App
