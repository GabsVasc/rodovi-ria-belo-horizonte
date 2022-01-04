import { Assento } from "../../models/AssentoEntity";
import { Usuario } from "../../models/UsuarioEntity";
import { CriarBilheteDto } from "../../@types/dto/bilheteDto";
import { Bilhete } from "../../models/BilheteEntity";
import { Viagem } from "../../models/ViagemEntity";
import { TokenPayload } from "../../@types/controllers/TokenPayload";

export function bilheteFactory(
  tokenPayload: TokenPayload,
  bilheteDto: CriarBilheteDto,
  assento: Assento
): Bilhete {
  const bilhete = new Bilhete();
  const usuario = new Usuario();
  const viagem = new Viagem();
  usuario.id = tokenPayload.id;
  viagem.id = bilheteDto.viagemId;
  bilhete.usuario = usuario;
  bilhete.viagem = viagem;
  assento.reservado = true;
  bilhete.assento = assento;
  bilhete.dataCompra = new Date();
  return bilhete;
}
