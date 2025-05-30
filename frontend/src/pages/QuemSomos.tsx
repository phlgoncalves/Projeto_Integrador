import { AiOutlineLinkedin } from "react-icons/ai"; 

import "../styles/style.css";
import equipeImg from "../assets/equipe.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cardTom from "../assets/tom.jpg";
import cardPedro from "../assets/pedro.jpg";
import cardSilvao from "../assets/silvao.jpg";
import cardBianca from "../assets/bianca.jpeg";
import cardEllison from "../assets/Ellisonnnn.jpg";


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

        <div className="membros-container">
          <h2 className="subtitulo">Conheça nossa equipe</h2>
          <div className="cards-equipe">
            <div className="card-membro">
              <img src={cardTom} alt="Wellington Medeiros" />
              <h3>Wellington Medeiros</h3>
              <p>Desenvolvedor Full Stack</p>
              <br />
              <br />
               <a
                  href="https://www.linkedin.com/in/wellington-medeiros96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <AiOutlineLinkedin />          
                </a>

            </div>
            <div className="card-membro">
              <img src={cardPedro} alt="Pedro Gonçalves" />
              <h3>Pedro Gonçalves</h3>
              <p>Desenvolvedor Full Stack</p>
              <br />
              <br />
               <a
                  href="https://www.linkedin.com/in/pedrohlgoncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <AiOutlineLinkedin /> 
                </a>
            </div>
            <div className="card-membro">
              <img src={cardSilvao} alt="Silvio" />
              <h3>Silvio Rocha</h3>
              <p>Desenvolvedor Full Stack</p>
              <p>CEO</p>
              <br />
              <br />
               <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <AiOutlineLinkedin /> 
                </a>
            </div>
            <div className="card-membro">
              <img src={cardBianca} alt="Bianca Ferraz" />
              <h3>Bianca Ferraz</h3>
              <p>Desenvolvedor Full Stack</p>
              <br />
              <br />
               <a
                  href="https://www.linkedin.com/in/bianca-dos-santos-ferraz-63991b353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <AiOutlineLinkedin /> 
                </a>
            </div>
            <div className="card-membro">
              <img src={cardEllison} alt="Ellison" />
              <h3>Ellison Erick</h3>
              <p>Desenvolvedor Full Stack</p>
              <br />
              <br />
              <br />
                <a
                  href="https://www.linkedin.com/in/ellisonerick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <AiOutlineLinkedin /> 
                </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QuemSomos;

