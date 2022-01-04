import { BaseError } from "./BaseError";

export class AssentoNaoExiste extends Error implements BaseError {
  public name: string;
  constructor() {
    super('Assento não existe');
    this.name = 'AssentoNaoExiste';
  }
}
