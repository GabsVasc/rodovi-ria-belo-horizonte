import { IAssentoRepository } from "../@types/repositories/IAssentoRepository";
import { Assento } from "../models/AssentoEntity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Assento)
export class AssentoRepository
  extends Repository<Assento>
  implements IAssentoRepository {
  findNaoReservados(): Promise<Assento[]> {
    return this.find({
      where: { reservado: false }
    })
  }

  findAssento(numeroAssento: number): Promise<Assento> {
    return this.findOne({ where : { numeroAssento: numeroAssento }})
  }
}
