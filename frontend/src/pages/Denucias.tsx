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
        <div className="formulario-denuncia">
        <label htmlFor="foto"></label>
        <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*"
                    // onChange={handleFileChange}
                    required
                />
                <br /><br />
                <label>Descriçao
                  <br />
                <textarea name="sdwvwv" id="" cols="30" rows="8"></textarea></label>
                <br />
                <button type="submit">Enviar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Denuncias;
