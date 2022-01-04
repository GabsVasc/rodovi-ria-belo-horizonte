import { CriarViagemDto } from "../../@types/dto/ViagemDto";
import { Viagem } from "../../models/ViagemEntity";

export interface IViagemService {
  criar(
    authorization: string,
    viagemDto: CriarViagemDto
  ): Promise<Viagem>;
  listar(): Promise<Viagem[]>;
}
