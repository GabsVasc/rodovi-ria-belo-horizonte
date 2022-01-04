import { Usuario } from "../../models/UsuarioEntity";

export interface IUsuarioRepository {
  find(): Promise<Usuario[]>;
  findOne(id: number): Promise<Usuario>;
  findUsuarioComViacao(id: number): Promise<Usuario>;
  findUsuariosPorViacao(idViacao: number): Promise<Usuario[]>;
  findByEmail(email: string): Promise<Usuario>;
  save(usuario: Usuario): Promise<Usuario>;
  remove(entities: Usuario | Usuario[]): Promise<Usuario[]>;
}
