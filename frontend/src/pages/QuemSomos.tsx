


// import "../styles/style.css";
// import equipeImg from "../assets/equipe.jpg"; 
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const QuemSomos = () => {
//   return (
//     <>
//         <Header />
//           <section className="quem-somos">
//             <div className="imagem-container">
//                 <img src={equipeImg} alt="Equipe" className="imagem-equipe" />
//             </div>
//             <div className="texto-container">
//                 <h1 className="titulo">Quem Somos</h1>
//                 <p className="descricao">
//                     Somos um grupo apaixonado por tecnologia, design e impacto social. Nosso objetivo é criar soluções inovadoras
//                     que melhorem a vida das pessoas. Acreditamos no poder da colaboração, da criatividade e do comprometimento
//                     com a excelência.
//                 </p>
//                 <p className="descricao">
//                     A equipe é composta por profissionais de diversas áreas: desenvolvimento, design, marketing e gestão, todos
//                     unidos por um propósito em comum. Trabalhamos juntos para transformar ideias em realidades digitais.
//                 </p>
//             </div>
//           </section>
//         <Footer/>
//     </>
//   );
// };

// export default QuemSomos;


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

        <div className="membros-container">
          <h2 className="subtitulo">Conheça nossa equipe</h2>
          <div className="cards-equipe">
            <div className="card-membro">
              <img src="src\assets\tom.jpg" alt="Wellington Medeiros" />
              <h3>Wellington Medeiros</h3>
              <p>Desenvolvedor Full Stack</p>
              <p>Designer UX/UI</p>
              <br />
               <a
                  href="https://www.linkedin.com/in/wellington-medeiros96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
                </a>
            </div>
            <div className="card-membro">
              <img src="src\assets\pedro.jpg" alt="Pedro Gonçalves" />
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
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
                </a>
            </div>
            <div className="card-membro">
              <img src="src\assets\silvao.jpg" alt="Silvio" />
              <h3>Silvio Rocha</h3>
              <p>Desenvolvedor Full Stack</p>
              <p>Gestor de Projetos</p>
              <br />
              <br />
               <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
                </a>
            </div>
            <div className="card-membro">
              <img src="src\assets\bianca.jpeg" alt="Bianca Ferraz" />
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
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
                </a>
            </div>
            <div className="card-membro">
              <img src="src\assets\Ellisonnnn.jpg" alt="Bianca Ferraz" />
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
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
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

