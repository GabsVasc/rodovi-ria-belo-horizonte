import { BaseError } from "./BaseError";

export class AssentoJaReservado extends Error implements BaseError {
  public name: string;
  constructor() {
    super('Assento já está reservado');
    this.name = 'AssentoJaReservado';
  }
}
