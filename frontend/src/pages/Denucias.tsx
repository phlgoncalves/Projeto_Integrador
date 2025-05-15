import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import { useContext } from "react";

function Denuncias() {
  const [isAnonimo, setIsAnonimo] = useState(true);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Exemplo: exibe os dados no console
    console.log({
      cep,
      rua,
      numero,
      descricao,
      tipo: isAnonimo ? 'Anônimo' : 'Público',
      foto,
    });

    // Aqui você pode enviar os dados via fetch/axios, exibir um toast, etc.
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
        <form onSubmit={handleSubmit}>
          {/* Upload de Imagem */}
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
            Descrição
            <br />
            <textarea
              placeholder="Descreva sua denúncia!"
              cols={30}
              rows={8}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </label>

          <div className="denuncia-end">
            {/* CEP */}
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

            {/* Rua */}
            <label htmlFor="rua">Rua:</label><br />
            <input
              className="rua-input"
              type="text"
              id="rua"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <br /><br />

            {/* Número */}
            <label htmlFor="numero">Número:</label><br />
            <input
              className="numero-input"
              type="text"
              id="numero"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <br /><br />

            {/* Tipo de denúncia */}
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

            {/* Botão de Enviar */}
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Denuncias;
