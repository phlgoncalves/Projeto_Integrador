import Footer from "../components/Footer";
import Header from "../components/Header";

function Denuncias() {
  return (
    <>
      <Header />
      <div className="container-denuncias">

        <div className="escolha-arquivo">

          <input 
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            // onChange={handleFileChange}
            required
          />
        </div>

        <br /><br />

        <label className="descricao">Descriçao
          <br />
          <textarea placeholder="Descreva sua Denuncia!" name="" id="" cols={30} rows={8}></textarea>
        </label>

        <div className="denuncia-end">
          Cep: <br />
          <input className="cep-input" type="text" placeholder="Digite um cep " />
          <br /><br />
          Rua: <br />
          <input className="rua-input" type="text" placeholder="Rua" />
          <br /><br />
          Numero: <br />
          <input className="numero-input" type="text" placeholder="Numero" />
          <br /><br />
          <button type="submit">Enviar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Denuncias;
