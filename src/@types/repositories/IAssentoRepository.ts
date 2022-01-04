import { Assento } from "../../models/AssentoEntity";

export interface IAssentoRepository {
  save(assento: Assento): Promise<Assento>;
  find(): Promise<Assento[]>;
  findNaoReservados(): Promise<Assento[]>;
  findAssento(numeroAssento: number): Promise<Assento>;
}
