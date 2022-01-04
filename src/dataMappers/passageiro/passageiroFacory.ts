import { Usuario } from "../../models/UsuarioEntity";
import { CriarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { UsuarioRole } from "../../@types/enums/UsuarioRole";
import { getHashSenha } from "../../utils/hashSenha";

export function passageiroFactory(usuarioDto: CriarUsuarioDto) {
  const passageiro = new Usuario();
  passageiro.nome = usuarioDto.nome;
  passageiro.email = usuarioDto.email;
  passageiro.senha = getHashSenha(usuarioDto.senha);
  passageiro.role = UsuarioRole.Passageiro;
  return passageiro;
}
