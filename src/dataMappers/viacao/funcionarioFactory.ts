import { validarEmail } from "../../utils/validarEmail";
import { CriarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";
import { UsuarioRole } from "../../@types/enums/UsuarioRole";
import { Viacao } from "../../models/ViacaoEntity";
import { getHashSenha } from "../../utils/hashSenha";

export function funcionarioFactory(
  usuarioDto: CriarUsuarioDto,
  viacaoId: number
): Usuario
{
  if (!validarEmail(usuarioDto.email)) {
    throw new Error("Email inválido");
  }
  const funcionario = new Usuario();
  funcionario.nome = usuarioDto.nome;
  funcionario.email = usuarioDto.email;
  funcionario.senha = getHashSenha(usuarioDto.senha);
  funcionario.role = UsuarioRole.Funcionario;
  const viacao = new Viacao();
  viacao.id = viacaoId;
  funcionario.viacao = viacao;
  return funcionario;
}
