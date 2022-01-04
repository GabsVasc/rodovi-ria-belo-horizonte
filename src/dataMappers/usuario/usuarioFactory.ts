import { Usuario } from "../../models/UsuarioEntity";
import { CriarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { getHashSenha } from "../../utils/hashSenha";

export function usuarioFactory(usuarioDto: CriarUsuarioDto): Usuario {
  const usuario = new Usuario();
  usuario.nome = usuarioDto.nome;
  usuario.email = usuarioDto.email;
  usuario.senha = getHashSenha(usuarioDto.senha);
  usuario.role = usuarioDto.role;
  return usuario;
}
