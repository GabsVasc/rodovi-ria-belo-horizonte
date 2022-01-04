import { BilheteDto } from "./bilheteDto";

export type AssentoDto = {
  id: number;
  numeroAssento: number;
  bilhete: BilheteDto;
}

export type CriarAssentoDto = {
  numeroAssento: number;
  viagemId: number;
}
