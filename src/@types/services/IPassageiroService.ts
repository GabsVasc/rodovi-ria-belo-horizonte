import { CriarBilheteDto } from "../../@types/dto/bilheteDto";
import { Bilhete } from "../../models/BilheteEntity";
import { CriarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";
import { TokenPayload } from "../../@types/controllers/TokenPayload";

export interface IPassageiroService {
  cadastrarPassageiro(usuarioDto: CriarUsuarioDto): Promise<TokenPayload>;
  criarBilhete(
    authorization: string,
    bilheteDto: CriarBilheteDto
  ): Promise<Bilhete>;
}
