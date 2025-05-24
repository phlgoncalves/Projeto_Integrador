import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

function Denuncias() {
  const [isAnonimo, setIsAnonimo] = useState(true);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Obter userId do localStorage (assumindo que está salvo após login)
      const usuarioId = localStorage.getItem('userId');
      if (!usuarioId) {
        throw new Error('Você precisa estar logado para denunciar');
      }

      // Criar denúncia - usando string fixa para foto por enquanto
      await api.AdicionarDenuncia(
        descricao,
        "foto-temporaria.jpg", // String fictícia para foto
        cep,
        rua,
        numero,
        complemento,
        isAnonimo,
        usuarioId
      );

      // Limpar formulário após sucesso
      setDescricao('');
      setCep('');
      setRua('');
      setNumero('');
      setComplemento('');
      setFoto(null);

      // Redirecionar ou mostrar mensagem
      alert('Denúncia registrada com sucesso!');
      navigate('/'); // Ou para outra página

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro ao enviar denúncia');
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0]);
    }
  };

  return (
    <>
      <Header />
      <div className="container-denuncias">
        <h2>Faça sua Denuncia!</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="escolha-arquivo">
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <br />
          <label className="descricao">
            Descrição*
            <textarea
              placeholder="Descreva sua denúncia!"
              cols={30}
              rows={8}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </label>

          <div className="denuncia-end">
            <label htmlFor="cep">CEP:</label><br />
            <input
              className="cep-input"
              type="text"
              id="cep"
              placeholder="Digite um CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <br /><br />

            <label htmlFor="rua">Rua:</label><br />
            <input
              className="rua-input"
              type="text"
              id="rua"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              required
            />
            <br /><br />

            <label htmlFor="numero">Número da Quadra:</label><br />
            <input
              className="numero-input"
              type="text"
              id="numero"
              placeholder="Quadra 3"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
            <br /><br />

            <label htmlFor="complemento">Complemento:</label><br />
            <input
              className="complemento-input"
              type="text"
              id="complemento"
              placeholder="Número"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <br /><br />

            <label>Tipo de denúncia:</label><br />
            <div className="switch-container">
              <input
                type="checkbox"
                id="switch"
                className="switch-input"
                checked={isAnonimo}
                onChange={() => setIsAnonimo(!isAnonimo)}
              />
              <label htmlFor="switch" className="switch-label">
                {isAnonimo ? "Anônimo" : "Público"}
              </label>
            </div>
            <br />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Denúncia'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Denuncias;
