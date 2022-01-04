import { BaseError } from "./BaseError";

export class UsusarioJaExiste extends Error implements BaseError {
  public static CODE = "ER_DUP_ENTRY";
  public name: string;
  constructor() {
    super("Usuario já existe");
    this.name = "UsuarioJaExiste";
  }
}
