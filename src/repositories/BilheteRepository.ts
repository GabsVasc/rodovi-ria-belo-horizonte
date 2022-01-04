import { Bilhete } from "../models/BilheteEntity";
import { EntityRepository, Repository } from "typeorm";
import { IBilheteRepository } from "../@types/repositories/IBilheteRepository";

@EntityRepository(Bilhete)
export class BilheteRepository
  extends Repository<Bilhete>
  implements IBilheteRepository{
  findBilhete(id: any) {
    return this.findOne({
      where: { id: id },
      relations: ["usuario", "assento", "viagem"]
    });
  }
}
