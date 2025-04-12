import { useEffect, useState } from 'react';
import "../../styles/style.css"

const nomes = ["Wellington Medeiros", "Maria Eduarda", "Pedro Gonçalves", "Ana Lucia", "Lucas Tico", "Bianca Brito"];
const bairros = ["Redentor", "Geisel", "Mary Dota", "Estoril", "Vila Universitaria", "Bela Vista", "Falcão", "Idependencia", "jaragua"];

function Popups() {
  const [mensagem, setMensagem] = useState('');
  const [visivel, setVisivel] = useState(false);

  const mostrarNotificacao = () => {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const bairro = bairros[Math.floor(Math.random() * bairros.length)];

    setMensagem(`${nome} acabou de fazer uma denuncia em ${bairro}`);
    setVisivel(true);

    setTimeout(() => {
      setVisivel(false);
    }, 5000);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      mostrarNotificacao();
    }, 30000); // A cada 30 segundos

    mostrarNotificacao(); // exibe a primeira já

    return () => clearInterval(intervalo); // limpa ao desmontar
  }, []);

  return (
    <div className={`popup ${visivel ? 'show' : ''}`}>
      <p><strong>{mensagem}</strong></p>
    </div>
  );
}

export default Popups;
