import { AtualizarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";

export function atualizaUsuario(
  usuario: Usuario,
  usuarioDto: AtualizarUsuarioDto
): Usuario {
  const usuarioAtualizado = { ...usuario, ...usuarioDto };
  return usuarioAtualizado;
}
