import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./UsuarioEntity";
import { Viagem } from "./ViagemEntity";

@Entity()
export class Viacao {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  nomeFantasia: string;

  @OneToMany(() => Usuario, usuario => usuario.viacao, { cascade: true })
  usuarios: Usuario[];

  @OneToMany(() => Viagem, viagem => viagem.viacao)
  viagens: Viagem[];
}
