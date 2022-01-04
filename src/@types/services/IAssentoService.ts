import { CriarAssentoDto } from "../../@types/dto/AssentoDto";
import { Assento } from "../../models/AssentoEntity";

export interface IAssentoService {
  criar(assentoDto: CriarAssentoDto): Promise<Assento>;
}
