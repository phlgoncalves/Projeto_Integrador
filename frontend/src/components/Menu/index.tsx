import { Link, useLocation } from "react-router-dom";
import { useState } from "react"
import Modal from "react-modal";
import Authentication from "../Authentication";


Modal.setAppElement('#root');

function Menu() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}')

    const location = useLocation()
    const { pathname } = location

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className="cotainer-menu">
                {pathname === '/' && (
                    <>
                        <button onClick={openModal} className="login-button">Login</button>
                        <div className="modal">
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content"
                            >
                                <button onClick={closeModal} className="close-modal">X</button>
                                <Authentication />
                            </Modal>
                        </div>
                    </>
                )}

                {pathname === ('/perfil') && (
                    <>
                        <Link to={'/perfil'}>Usuario: {usuario.nome}</Link>
                        <Link to={'/denuncia'}>Denuncias</Link>
                    </>
                )}

                {pathname === ('/denuncia') && (
                    <>
                        <Link to={'/perfil'}>Perfil</Link>
                        <Link to={'/denuncia'}>Denuncias</Link>
                    </>
                )}

                {pathname === '/registro' && (
                    <>
                        <button onClick={openModal} className="login-button">Login</button>
                        <div className="modal">
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content"
                            >
                                <button onClick={closeModal} className="close-modal">X</button>
                                <Authentication />
                            </Modal>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default Menu