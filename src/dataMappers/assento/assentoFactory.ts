import { Viagem } from "../../models/ViagemEntity";
import { CriarAssentoDto } from "../../@types/dto/AssentoDto";
import { Assento } from "../../models/AssentoEntity";

export function assentoFactory(assentoDto: CriarAssentoDto): Assento {
  const assento = new Assento();
  const viagem = new Viagem();
  viagem.id = assentoDto.viagemId;
  assento.numeroAssento = assentoDto.numeroAssento;
  assento.viagem = viagem;
  return assento;
}
