import React, { useState } from 'react';
import Card from "../components/Cards"
import Header from "../components/Header"
import "../styles/style.css"
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Modal from "react-modal";
import { Typewriter } from 'react-simple-typewriter';

Modal.setAppElement('#root');




const Home: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ titulo: "", descricao: "" });

    const navigate = useNavigate();

    // Função para abrir o modal e passar o conteúdo
    const openModal = (titulo: string, descricao: string) => {
        setModalContent({ titulo, descricao });
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Navega para a página de destino
    const handleDenuncia = () => {
        navigate('denuncia');
    }

    return (
        <>
            <Header />
            <div className='container-home'>
                <div className="boas-vindas">
                    <div className="container-boas">
                        <div className="titulo">
                            <h1>DENGUE OFF</h1>
                            <br />
                            <h2>Reporte e Ajude</h2>
                        </div>
                        <div className='explicativo'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo suscipit possimus? Animi eaque eum rerum, nulla temporibus aspernatur commodi? Aut deserunt, odio culpa nihil nulla quisquam dolorem, soluta minima rerum excepturi aliquid laborum facere eaque eveniet provident numquam distinctio ab mollitia quod reiciendis cumque amet. Maiores doloremque amet veritatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus tempora ad sed praesentium voluptas eaque suscipit unde veritatis reprehenderit, repudiandae pariatur animi quo assumenda quasi totam, numquam cum, id illum magni omnis hic nobis! Reiciendis ducimus ex suscipit culpa animi natus magni, fuga, ullam totam ut non accusantium voluptatem!</p>
                        </div>
                        <br /><br /><br />
                        <div className='numero-denuncias'>
                            <Typewriter
                                words={['Bauru registrou 2.043 casos confirmados em 2025!']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                            />
                        </div>

                    </div>

                    <div className='btn-boasVindas'>
                        <button className='btn-denuncia' onClick={handleDenuncia}>Denuncie já!</button>
                    </div>

                    <div className="container-cards">
                        <Card
                            titulo="SINTOMAS"
                            img="src/assets/coceira.png"
                            imgAlt="dengue"
                            // descricao=""
                            onClick={() => openModal("SINTOMAS", "A dengue geralmente causa febre alta, dores intensas no corpo (principalmente nas articulações e músculos), dor de cabeça forte, dor atrás dos olhos, náuseas, cansaço excessivo e erupções cutâneas.")}
                        />
                        <Card
                            titulo="TRANSMISSÃO"
                            img="src/assets/icone-dengue.png"
                            imgAlt="dengue"
                            // descricao="A dengue é transmitida pela picada do mosquito Aedes aegypti..."
                            onClick={() => openModal("TRANSMISSÃO", "A dengue é transmitida pela picada do mosquito Aedes aegypti infectado, que costuma se alimentar durante o dia, especialmente nas primeiras horas da manhã e ao entardecer.")}
                        />
                        <Card
                            titulo="PREVENÇÃO"
                            img="src/assets/agua.png"
                            imgAlt="dengue"
                            // descricao="A principal forma de prevenção é evitar o acúmulo de água parada..."
                            onClick={() => openModal("PREVENÇÃO", "A principal forma de prevenção é evitar o acúmulo de água parada, onde o mosquito pode depositar seus ovos. Isso inclui eliminar pneus, garrafas, potes e caixas d'água sem tampa.")}
                        />
                        <Card
                            titulo="TRATAMENTO"
                            img="src/assets/medicamento.png"
                            imgAlt="dengue"
                            // descricao="Não há tratamento específico para a dengue. O tratamento é focado em aliviar os sintomas..."
                            onClick={() => openModal("TRATAMENTO", "Não há tratamento específico para a dengue. O tratamento é focado em aliviar os sintomas, como o uso de analgésicos e hidratação adequada. Em casos graves, a pessoa pode necessitar de internação hospitalar.")}
                        />
                    </div>

                    <div className='container-btnDenunciaHome'>
                        <p>"Silenciar é colaborar com a dengue. <b>Denuncie agora!</b> </p>
                        <button className='btn-denuncia' onClick={handleDenuncia}>Denuncie já!</button>
                    </div>

                    <div className='container-IMGbaner'>
                        <img className='baner-home' src="src\assets\Banner_Blog_dengue.png" />
                    </div>
                </div>
                <Footer />
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Detalhes do Cartão"
                className="modal-content-card"
                overlayClassName="modal-overlay-card"
            >
                <h2>{modalContent.titulo}</h2>
                <p>{modalContent.descricao}</p>
                <button className='button-card' onClick={closeModal}>Fechar</button>
            </Modal>

        </>
    )
}
export default Home