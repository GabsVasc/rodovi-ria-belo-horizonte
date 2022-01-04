import { Viacao } from "../models/ViacaoEntity";
import { EntityRepository, Repository } from "typeorm";
import { IViacaoRepository } from "../@types/repositories/IViacaoRepository";

@EntityRepository(Viacao)
export class ViacaoRepository
  extends Repository<Viacao>
  implements IViacaoRepository {}

