import { Bilhete } from "../../models/BilheteEntity";

export interface IBilheteRepository {
  save(bilhete: Bilhete): Promise<Bilhete>;
}
