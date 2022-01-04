import { Viagem } from "../models/ViagemEntity";
import { EntityRepository, Repository } from "typeorm";
import { IViagemRepository } from "../@types/repositories/IVigemRepository";

@EntityRepository(Viagem)
export class ViagemRepository
  extends Repository<Viagem>
  implements IViagemRepository {}
