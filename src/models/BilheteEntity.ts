import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Assento } from "./AssentoEntity";
import { Usuario } from "./UsuarioEntity";
import { Viagem } from "./ViagemEntity";

@Entity()
export class Bilhete {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "datetime" })
  dataCompra: Date;

  @ManyToOne(() => Usuario, usuario => usuario.bilhetes)
  usuario: Usuario;

  @OneToOne(() => Assento, assento => assento.bilhete, { cascade: true })
  assento: Assento;

  @ManyToOne(() => Viagem, viagem => viagem.bilhetes)
  viagem: Viagem;
}
