import { Usuario } from "../models/UsuarioEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";

@EntityRepository(Usuario)
export class UsuarioRepository
  extends Repository<Usuario>
  implements IUsuarioRepository
{
  findUsuariosPorViacao(idViacao: number): Promise<Usuario[]> {
    return this.find({ where: {viacao: {id: idViacao} } });
  }
  findUsuarioComViacao(id: number): Promise<Usuario> {
    return this.findOne({
      where: { id: id },
      relations: ["viacao"]
    })
  }

  async findByEmail(email: string): Promise<Usuario> {
    return await this.findOne({
      where: { email: email },
    });
  }
}
