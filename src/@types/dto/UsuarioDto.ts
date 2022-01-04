import { Usuario } from "models/UsuarioEntity";
import { UsuarioRole } from "../enums/UsuarioRole";

export type UsuarioDto = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  role: UsuarioRole;
}

export type CriarUsuarioDto = {
  nome: string;
  email: string;
  senha: string;
  role: UsuarioRole;
}

export type AtualizarUsuarioDto = {
  nome?: string;
  email?: string;
  senha?: string;
  role?: UsuarioRole;
}

export type AutenticarUsuario = Pick<Usuario, "email" | "senha">;
