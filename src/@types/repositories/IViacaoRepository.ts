import { Viacao } from "models/ViacaoEntity";

export interface IViacaoRepository {
  save(viacao: Viacao): Promise<Viacao>;
  find(): Promise<Viacao[]>;
  findOne(id: number): Promise<Viacao>;
  remove(entities: Viacao | Viacao[]): Promise<Viacao[]>;
}
