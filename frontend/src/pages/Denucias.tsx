import Footer from "../components/Footer";
import Header from "../components/Header";

function Denuncias() {
  return (
    <>
      <Header />
      <div className="container-denuncias">
        <div>
          <h1>Página de Denuncias</h1>
        </div>
        {/* <div className="formulario-denuncia"> */}
        <div>
          <input className="escolha-arquivo"
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            // onChange={handleFileChange}
            required
          />
          <br /><br />
          <label className="descricao">Descriçao
            <br />
            <textarea name="" id="" cols="30" rows="8"></textarea>
          </label>
          
          <div className="denuncia-end">
            Endereço: <br />
            <input type="text" placeholder="Digite um cep valido" />
            <br />
            <input type="text" placeholder="Endereço" />
            <br />
            <input type="text" placeholder="Numero" />
            <br />
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Denuncias;
