import Denuncias from "./Denuncias.js";
import { funcoesES } from "./ES.js";
import Feedback from "./Feedback.js";
import Registro from "./Registro.js";

const ES = new funcoesES();


const cadastro1 = new Registro('Pedro', 14988476868, '145.156.369-5', 'Bauru', 'Floriano Peixoto', 126, 'Estoril', 'pedro@gmail.com', '12345')

const post1 = new Feedback('Pagina me ajudou bastante apos a denuncia, realmente vieram fiscalizar.', null)

const denuncia1 = new Denuncias('Terreno abandonado ', null, 'Sorocabana', 'Santa Clara', false)


ES.mensagemCompleta(cadastro1.cadastro())
ES.mensagemSimples(cadastro1.login('pedro@gmail.com', '12345'))

ES. mensagemCompleta(denuncia1.denuncia())
ES.mensagemSimples(denuncia1.anonimo())



ES.mensagemSimples(post1.post())