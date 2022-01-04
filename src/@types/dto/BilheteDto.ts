import { AssentoDto } from "./AssentoDto";
import { TokenPayload } from "../controllers/TokenPayload"
import { ViagemDto } from "./ViagemDto";

export type BilheteDto = {
  id: number;
  dataCompra: Date;
  usuario: TokenPayload;
  assento: AssentoDto;
  viagem: ViagemDto;
}

export type CriarBilheteDto = {
  dataCompra: Date;
  numeroAssento: number;
  viagemId: number;
}
