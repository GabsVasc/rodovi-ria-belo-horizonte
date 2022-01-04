import { IViagemService } from "../@types/services/IViagemService";
import { Inject, Service } from "typedi";
import { CriarViagemDto } from "../@types/dto/ViagemDto";
import { Viagem } from "../models/ViagemEntity";
import { viagemFactory } from "../dataMappers/viagem/viagemFactory";
import { IViagemRepository } from "../@types/repositories/IVigemRepository";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { decode } from "jsonwebtoken";
import { TokenPayload } from "../@types/controllers/TokenPayload";

@Service("ViagemService")
export class ViagemService implements IViagemService {
  public constructor(
    @Inject("ViagemRepository")
    private viagemRepository: IViagemRepository,
    @Inject("UsuarioRepository")
    private usarioRepository: IUsuarioRepository,
  ){}

  async criar(
    authorization: string,
    viagemDto: CriarViagemDto
  ): Promise<Viagem> {
    const tokenPayload = decode(authorization) as TokenPayload;
    const usuario =
      await this.usarioRepository.findUsuarioComViacao(tokenPayload.id);
    const viagem = viagemFactory(viagemDto, usuario.viacao);

    const viagemSalva = await this.viagemRepository.save(viagem);
    return viagemSalva;
  }

  async listar(): Promise<Viagem[]> {
    return await this.viagemRepository.find();
  }
}
