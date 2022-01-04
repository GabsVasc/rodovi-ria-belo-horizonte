import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Assento } from "./AssentoEntity";
import { Bilhete } from "./BilheteEntity";
import { Viacao } from "./ViacaoEntity";

@Entity()
export class Viagem {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  pontoPartida: string;

  @Column()
  pontoDestino: string;

  @Column({ type: "datetime" })
  dataViagem: Date;

  @OneToMany(() => Bilhete, bilhete => bilhete.usuario)
  bilhetes: Bilhete[];

  @ManyToOne(() => Viacao, viacao => viacao.viagens)
  viacao: Viacao;

  @OneToMany(() => Assento, assento => assento.viagem)
  assentos: Assento[];
}
