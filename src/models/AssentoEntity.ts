import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bilhete } from "./BilheteEntity";
import { Viagem } from "./ViagemEntity";

@Entity()
export class Assento {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  numeroAssento: number;

  @Column({ default: false })
  reservado: boolean;

  @OneToOne(() => Bilhete, bilhete => bilhete.assento)
  bilhete: Bilhete;

  @ManyToOne(() => Viagem, viagem => viagem.assentos)
  viagem: Viagem;
}
