import { CriarUsuarioDto, UsuarioDto } from "../dto/UsuarioDto";
import { Usuario } from "../../models/UsuarioEntity";
import { TokenPayload } from "../../@types/controllers/TokenPayload";

export interface IUsuarioService {
  listar(): Promise<Usuario[]>;
  buscar(id: number): Promise<Usuario>;
  criar(usuarioDto: CriarUsuarioDto): Promise<TokenPayload>;
  atualizar(id: number, usuarioDto: UsuarioDto): Promise<void>;
  autenticar(email: string, senha: string): Promise<string>;
  remover(id: number): Promise<void>;
}
