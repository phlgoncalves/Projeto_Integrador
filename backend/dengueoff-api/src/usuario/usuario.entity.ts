import * as bcrypt from 'bcrypt';
import {Entity} from "typeorm";

@Entity()
export class USUARIO {
  id: string;
  nome: string;
  cpf: string;
  idade: Number;
  email: string;
  cep: string;
  endereco: string;
  complemento: string;
  cidade: string;
  telefone: string;
  senha: string; 
}
