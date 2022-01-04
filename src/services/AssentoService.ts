import { IAssentoService } from "../@types/services/IAssentoService";
import { Inject, Service } from "typedi";
import { IAssentoRepository } from "../@types/repositories/IAssentoRepository";
import { CriarAssentoDto } from "../@types/dto/AssentoDto";
import { Assento } from "../models/AssentoEntity";
import { assentoFactory } from "../dataMappers/assento/assentoFactory";

@Service("AssentoService")
export class AssentoService implements IAssentoService {
  public constructor(
    @Inject("AssentoRepository")
    private assentoRepository: IAssentoRepository
  ){}

  async criar(assentoDto: CriarAssentoDto): Promise<Assento> {
    const assento = assentoFactory(assentoDto);
    const assentoSalvo = await this.assentoRepository.save(assento);
    return assentoSalvo;
  }
}
