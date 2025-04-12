import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'usuario',
})
export class Usuario extends Model {
  @Column
  nome: string;

  @Column
  cpf: string;

  @Column
  telefone: string;

  @Column
  email: string;

  @Column
  senha: string;

  @Column
  cidade: string;
}