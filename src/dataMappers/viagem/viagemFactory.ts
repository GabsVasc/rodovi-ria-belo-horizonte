import { Viacao } from "models/ViacaoEntity";
import { CriarViagemDto } from "../../@types/dto/ViagemDto";
import { Viagem } from "../../models/ViagemEntity";

export function viagemFactory(viagemDto: CriarViagemDto, viacao: Viacao): Viagem {
  const viagem = new Viagem();
  viagem.pontoDestino = viagemDto.pontoDestino;
  viagem.pontoPartida = viagemDto.pontoPartida;
  viagem.dataViagem = viagemDto.dataViagem;
  viagem.viacao = viacao;
  return viagem;
}
