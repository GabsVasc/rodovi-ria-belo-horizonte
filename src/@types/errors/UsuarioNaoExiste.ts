import { BaseError } from "./BaseError";

export class UsuarioNaoExiste extends Error implements BaseError {
  public name: string;
  constructor() {
    super('Usuario não existe');
    this.name = 'UsuarioNaoExiste';
  }
}
