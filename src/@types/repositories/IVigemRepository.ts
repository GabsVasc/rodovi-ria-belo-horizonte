import { Viagem } from "../../models/ViagemEntity";

export interface IViagemRepository {
  save(viagem: Viagem): Promise<Viagem>;
  find(): Promise<Viagem[]>;
}
