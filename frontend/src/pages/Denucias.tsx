import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Denuncias() {

  // const [isMoved, setIsMoved] = useState(false);

  // const handleClick = () => {
  //   setIsMoved(!isMoved);
  // }

    const [isChecked, setIsChecked] = useState(true);
  
    const handleChange = () => {
      setIsChecked(!isChecked);
    }

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

        <br />
        <br />

        <label className="descricao">
          Descriçao
          <br />
          <textarea
            placeholder="Descreva sua Denuncia!"
            name=""
            id=""
            cols={30}
            rows={8}
          ></textarea>
        </label>

        <div className="denuncia-end">
          Cep: <br />
          <input
            className="cep-input"
            type="text"
            placeholder="Digite um cep "
          />
          <br />
          <br />
          Complemento: <br />
          <input className="rua-input" type="text" placeholder="Rua" />
          <br />
          <br />
          Numero: <br />
          <input className="numero-input" type="text" placeholder="Numero" />
          <br />
          <br />
          {/* <div className="button" onClick={handleClick}>
            <div className={`ball ${isMoved ? "ball-move" : ""}`}></div>
          </div> */}
           Denuncia :
           <br />
            <div className="switch-container">
                <br />
                <input
                  type="checkbox"
                  id="switch"
                  className="switch-input"
                  checked={isChecked}
                  onChange={handleChange}
                />
                  <label htmlFor="switch" className="switch-label">
                    {isChecked ? 'Anônimo' : 'Público'}
                  </label>
            </div>


          <br />
          <button type="submit">Enviar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Denuncias;
