


import "../styles/style.css";
import equipeImg from "../assets/equipe.jpg"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuemSomos = () => {
  return (
    <>
    <Header />
        <section className="quem-somos">
          <div className="imagem-container">
              <img src={equipeImg} alt="Equipe" className="imagem-equipe" />
          </div>
          <div className="texto-container">
              <h1 className="titulo">Quem Somos</h1>
              <p className="descricao">
                  Somos um grupo apaixonado por tecnologia, design e impacto social. Nosso objetivo é criar soluções inovadoras
                  que melhorem a vida das pessoas. Acreditamos no poder da colaboração, da criatividade e do comprometimento
                  com a excelência.
              </p>
              <p className="descricao">
                  A equipe é composta por profissionais de diversas áreas: desenvolvimento, design, marketing e gestão, todos
                  unidos por um propósito em comum. Trabalhamos juntos para transformar ideias em realidades digitais.
              </p>
          </div>
        </section>
        <Footer/>
    </>
  );
};

export default QuemSomos;
