import { useState, useEffect } from "react"
import "../styles/style.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { api } from "../api"

function VerDenuncia() {
  const [denuncias, setDenuncias] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const carregarDenuncias = async () => {
      try {
        // Primeiro carrega a lista básica de denúncias
        const denunciasDaApi = await api.CarregarTodasDenuncias()
        
        // Para cada denúncia, carrega os detalhes completos
        const denunciasCompletas = await Promise.all(
          denunciasDaApi.map(async (d: any) => {
            const detalhes = await api.CarregarDenunciaUnica(d.id)
            return {
              ...d,
              detalhes: detalhes.Denuncia
            }
          })
        )
        
        setDenuncias(denunciasCompletas)
      } catch (err) {
        setError("Erro ao carregar denúncias")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    
    carregarDenuncias()
  }, [])

  if (loading) {
    return (
      <>
        <Header/>
        <div className="app-container">
          <p>Carregando denúncias...</p>
        </div>
        <Footer/>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header/>
        <div className="app-container">
          <p className="error">{error}</p>
        </div>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <Header/>
      <div className="app-container">
        <header className="header">
          <h1>Sistema de Gerenciamento de Denúncias</h1>
          <p>Visualize e acompanhe as denúncias registradas</p>
        </header>

        <div className="estatisticas">
          <div className="estatistica-item">
            <span className="numero">{denuncias.length}</span>
            <span className="label">Total</span>
          </div>
        </div>

        <div className="cards-container">
          {denuncias.length > 0 ? (
            denuncias.map((denuncia) => (
              <div key={denuncia.id} className="card resolvido">
                <div className="card-header">
                  <h2>{denuncia.descricao}</h2>
                  <span className="status resolvido"></span>
                </div>

                <div className="card-body">
                  <p>{denuncia.detalhes?.message || `Denúncia registrada. Local: ${denuncia.rua}, Nº ${denuncia.numero}, BAIRRO ${denuncia.bairro}`}</p>

                  {denuncia.fotos && denuncia.fotos !== "foto-temporaria.jpg" && (
                    <div className="denuncia-foto">
                      <p>Foto: {denuncia.fotos}</p>
                    </div>
                  )}
                  
                  <div className="card-footer">
                    <span className="id">ID: {denuncia.id}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="sem-resultados">
              <p>Nenhuma denúncia encontrada.</p>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default VerDenuncia


