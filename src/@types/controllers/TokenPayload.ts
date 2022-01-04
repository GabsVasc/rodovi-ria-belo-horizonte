import { UsuarioRole } from "../../@types/enums/UsuarioRole";

export type TokenPayload = {
  id: number;
  nome: string;
  email: string;
  role: string;
}
