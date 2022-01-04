import { CriarViacaoDto } from "../../@types/dto/ViacaoDto";
import { Viacao } from "../../models/ViacaoEntity";

export function viacaoFactory(viacaoDto: CriarViacaoDto): Viacao {
  const viacao = new Viacao();
  viacao.cnpj = viacaoDto.cnpj;
  viacao.nomeFantasia = viacaoDto.nomeFantasia;
  return viacao;
}
