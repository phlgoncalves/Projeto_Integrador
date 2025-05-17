import * as bcrypt from 'bcrypt';
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class USUARIO {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NOME: string;

  @Column({ length: 255 })
  CPF: string;

  @Column({ length: 255 })
  DATANASC: string;

  @Column({ length: 255 })
  EMAIL: string;

  @Column({ length: 255 })
  CEP: string;

  @Column({ length: 255 })
  ENDERECO: string;

  @Column({ length: 255 })
  COMPLEMENTO: string;

  @Column({ length: 255 })
  CIDADE: string;

  @Column({ length: 255 })
  TELEFONE: string;

  @Column({ length: 255 })
  SENHA: string;

  trocaSenha(senha) {
    const saltOrRounds = 10;
    this.SENHA = bcrypt.hashSync(senha, saltOrRounds)
  }

  login(senha) {
    return bcrypt.compareSync(senha, this.SENHA);
  }
}
