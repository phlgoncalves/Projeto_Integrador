

import { Link, useNavigate } from "react-router-dom";
import "../../styles/style.css";

const CombateDengue = () => {
  const navigate = useNavigate();
  return (
    <div className="combate-container">
      <div className="combate-inner">
        <div className="combate-content">
          <div className="combate-text">
            <h1 className="combate-title">Combate à Dengue</h1>
            <p className="combate-subtitle">
              Juntos podemos combater a dengue. Faça sua parte denunciando focos do mosquito.
            </p>
            <div className="combate-botoes">
              <Link
                to="/denuncia"
                className="botao-denuncia"
                onClick={(e) => {
                  e.preventDefault(); // evita a navegação imediata
                  const token = localStorage.getItem('token');
                  if (token) {
                    navigate('/denuncia');
                  } else {
                    alert('Você precisa estar logado para fazer uma denúncia.');
                    navigate('/login');
                  }
                }}
              >
                Fazer Denúncia
              </Link>
              <Link to="/ver-denuncia" className="botao-ver-denuncias">
                Ver Denúncias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombateDengue;
