import { Viacao } from "../../models/ViacaoEntity";
import { CriarViacaoDto } from "../../@types/dto/ViacaoDto";
import { CriarUsuarioDto } from "../../@types/dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";
import { TokenPayload } from "../../@types/controllers/TokenPayload";

export interface IViacaoService {
  criar(viacaoDto: CriarViacaoDto): Promise<Viacao>;
  cadastrarFuncionario(
    usuarioDto: CriarUsuarioDto,
    viacaoId: number
  ): Promise<TokenPayload>;
  listarFuncionarios(idViacao: number ): Promise<Usuario[]>;
}
