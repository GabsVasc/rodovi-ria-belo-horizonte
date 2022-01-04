import { UsuarioRole } from "../@types/enums/UsuarioRole";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Bilhete } from "./BilheteEntity";
import { Viacao } from "./ViacaoEntity";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column ()
  senha: string;

  @Column({ type: "enum", enum: UsuarioRole, default: UsuarioRole.Passageiro })
  role: UsuarioRole;

  @OneToMany(() => Bilhete, bilhete => bilhete.usuario)
  bilhetes: Bilhete[]

  @ManyToOne(() => Viacao, viacao => viacao.usuarios)
  viacao: Viacao;
}
