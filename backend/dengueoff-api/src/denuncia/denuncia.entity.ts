import { USUARIO } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class DENUNCIA {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  DESCRICAO: string;

  @Column({ length: 255 })
  FOTOS: string;

  @Column({ length: 255 })
  CEP: string;

  @Column({ length: 255 })
  RUA: string;

  @Column({ length: 255 })
  NUMERO: string;

  @Column({ length: 255 })
  COMPLEMENTO: string;

  @Column()
  ANONIMATO: boolean;


  @ManyToOne(() => USUARIO, usuario => usuario.denuncias, {
    onDelete: 'CASCADE',   // se o usuário for deletado, as denúncias também
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IDUSUARIO', referencedColumnName: "ID" }) // cria coluna IDUSUARIO na tabela DENUNCIA
  USUARIO: USUARIO;
}

// denuncia(): string {
//   const agora = new Date()
//   return this.descricao +
//     '\nEndereço: ' + this.endereco + (this.complemento ? ', ' + this.complemento : '') +
//     ' - CEP ' + this.cep +
//     '\nEmail: ' + this.usuario.email +
//     '\nFoto: ' + this.fotos +
//     '\n' + agora;
// }

