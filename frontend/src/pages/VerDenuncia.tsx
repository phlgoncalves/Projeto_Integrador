




import { useState } from "react"
import "../styles/style.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

// Dados de exemplo para as denúncias
const denunciasIniciais = [
  {
    id: 1,
    titulo: "Poluição sonora",
    descricao: "Bar com música alta após 22h",
    data: "2024-05-15",
    status: "Resolvido",
    categoria: "Ambiental",
    prioridade: "Alta",
  },
  {
    id: 2,
    titulo: "Descarte irregular de lixo",
    descricao: "Lixo sendo descartado em área de preservação",
    data: "2024-05-10",
    status: "Pendente",
    categoria: "Ambiental",
    prioridade: "Média",
  },
  {
    id: 3,
    titulo: "Calçada danificada",
    descricao: "Calçada com buracos causando acidentes",
    data: "2024-05-08",
    status: "Em análise",
    categoria: "Infraestrutura",
    prioridade: "Baixa",
  },
  {
    id: 4,
    titulo: "Vazamento de água",
    descricao: "Vazamento na rua principal há 3 dias",
    data: "2024-05-12",
    status: "Resolvido",
    categoria: "Infraestrutura",
    prioridade: "Alta",
  },
  {
    id: 5,
    titulo: "Falta de iluminação",
    descricao: "Poste sem luz há uma semana",
    data: "2024-05-01",
    status: "Pendente",
    categoria: "Infraestrutura",
    prioridade: "Média",
  },
  {
    id: 6,
    titulo: "Maus tratos a animais",
    descricao: "Cães abandonados em residência",
    data: "2024-05-18",
    status: "Em análise",
    categoria: "Animal",
    prioridade: "Alta",
  },
  {
    id: 7,
    titulo: "Comércio irregular",
    descricao: "Vendedores sem licença na praça central",
    data: "2024-05-03",
    status: "Resolvido",
    categoria: "Comercial",
    prioridade: "Baixa",
  },
  {
    id: 8,
    titulo: "Perturbação do sossego",
    descricao: "Festas constantes em condomínio residencial",
    data: "2024-05-07",
    status: "Pendente",
    categoria: "Social",
    prioridade: "Média",
  },
  {
    id: 9,
    titulo: "Veículo abandonado",
    descricao: "Carro abandonado há meses na via pública",
    data: "2024-04-25",
    status: "Resolvido",
    categoria: "Trânsito",
    prioridade: "Baixa",
  },
  {
    id: 10,
    titulo: "Queimada ilegal",
    descricao: "Queimada em terreno próximo a área residencial",
    data: "2024-05-20",
    status: "Em análise",
    categoria: "Ambiental",
    prioridade: "Alta",
  },
  {
    id: 11,
    titulo: "Buraco na via",
    descricao: "Buraco grande na avenida principal",
    data: "2024-05-11",
    status: "Pendente",
    categoria: "Infraestrutura",
    prioridade: "Alta",
  },
  {
    id: 12,
    titulo: "Pichação em monumento",
    descricao: "Monumento histórico vandalizado",
    data: "2024-05-09",
    status: "Em análise",
    categoria: "Patrimônio",
    prioridade: "Média",
  },
]

function VerDenuncia() {
  const [denuncias, setDenuncia] = useState(denunciasIniciais)
  const [filtroStatus, setFiltroStatus] = useState("Todos")
  const [filtroCategoria, setFiltroCategoria] = useState("Todas")
  const [pesquisa, setPesquisa] = useState("")

  // Função para filtrar as denúncias
  const denunciasFiltradas = denuncias.filter((denuncia) => {
    const matchStatus = filtroStatus === "Todos" || denuncia.status === filtroStatus
    const matchCategoria = filtroCategoria === "Todas" || denuncia.categoria === filtroCategoria
    const matchPesquisa =
      denuncia.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
      denuncia.descricao.toLowerCase().includes(pesquisa.toLowerCase())

    return matchStatus && matchCategoria && matchPesquisa
  })

  // Obter categorias únicas para o filtro
  const categorias = ["Todas", ...new Set(denuncias.map((d) => d.categoria))]

  return (
    <>
    <Header/>
    <div className="app-container">
    
      <header className="header">
        <h1>Sistema de Gerenciamento de Denúncias</h1>
        <p>Visualize e acompanhe o status das denúncias registradas</p>
      </header>

      <div className="filtros-container">
        <div className="filtro">
          <label htmlFor="pesquisa">Pesquisar:</label>
          <input
            type="text"
            id="pesquisa"
            placeholder="Busca por Bairro"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
        </div>

        <div className="filtro">
          <label htmlFor="status">Status:</label>
          <select id="status" value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="Resolvido">Resolvido</option>
            <option value="Pendente">Pendente</option>
            <option value="Em análise">Em análise</option>
          </select>
        </div>

        <div className="filtro">
          <label htmlFor="categoria">Categoria:</label>
          <select id="categoria" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="estatisticas">
        <div className="estatistica-item">
          <span className="numero">{denuncias.length}</span>
          <span className="label">Total</span>
        </div>
        <div className="estatistica-item">
          <span className="numero">{denuncias.filter((d) => d.status === "Resolvido").length}</span>
          <span className="label">Resolvidas</span>
        </div>
        <div className="estatistica-item">
          <span className="numero">{denuncias.filter((d) => d.status === "Pendente").length}</span>
          <span className="label">Pendentes</span>
        </div>
        <div className="estatistica-item">
          <span className="numero">{denuncias.filter((d) => d.status === "Em análise").length}</span>
          <span className="label">Em análise</span>
        </div>
      </div>

      <div className="cards-container">
        {denunciasFiltradas.length > 0 ? (
          denunciasFiltradas.map((denuncia) => (
            <div key={denuncia.id} className={`card ${denuncia.status.toLowerCase().replace(" ", "-")}`}>
              <div className="card-header">
                <h2>{denuncia.titulo}</h2>
                <span className={`status ${denuncia.status.toLowerCase().replace(" ", "-")}`}>{denuncia.status}</span>
              </div>
              <div className="card-body">
                <p>{denuncia.descricao}</p>
                <div className="card-info">
                  <span className="categoria">{denuncia.categoria}</span>
                  <span className={`prioridade ${denuncia.prioridade.toLowerCase()}`}>
                    Prioridade: {denuncia.prioridade}
                  </span>
                </div>
                <div className="card-footer">
                  <span className="data">Registrado em: {denuncia.data}</span>
                  <span className="id">ID: {denuncia.id}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="sem-resultados">
            <p>Nenhuma denúncia encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default VerDenuncia
