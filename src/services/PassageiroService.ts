import { Inject, Service } from "typedi";
import { CriarUsuarioDto } from "../@types/dto/UsuarioDto";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { passageiroFactory } from "../dataMappers/passageiro/passageiroFacory";
import { CriarBilheteDto } from "../@types/dto/bilheteDto";
import { bilheteFactory } from "../dataMappers/bilhete/bilheteFactory";
import { decode } from "jsonwebtoken";
import { TokenPayload } from "../@types/controllers/TokenPayload";
import { IBilheteRepository } from "../@types/repositories/IBilheteRepository";
import { Bilhete } from "../models/BilheteEntity";
import { IPassageiroService } from "../@types/services/IPassageiroService";
import { IAssentoRepository } from "../@types/repositories/IAssentoRepository";
import { AssentoJaReservado } from "../@types/errors/AssentoJaReservado";
import { AssentoNaoExiste } from "../@types/errors/AssentoNaoExiste";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";

@Service("PassageiroService")
export class PassageiroService implements IPassageiroService {
  public constructor(
    @Inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository,
    @Inject("BilheteRepository")
    private bilheteRepository: IBilheteRepository,
    @Inject("AssentoRepository")
    private assentoRepository: IAssentoRepository
  ){}

  async cadastrarPassageiro(usuarioDto: CriarUsuarioDto): Promise<TokenPayload> {
    try {
      const funcionario = passageiroFactory(usuarioDto);
      const funcionarioSalvo = await this.usuarioRepository.save(funcionario);
      const { senha, ...funcionarioTratado } = funcionarioSalvo;
      return funcionarioTratado;
    } catch(error) {
      if(error?.code === UsusarioJaExiste.CODE) {
        throw new UsusarioJaExiste();
      }
    }
  }

  async criarBilhete(
    authorization: string,
    bilheteDto: CriarBilheteDto
  ): Promise<Bilhete> {
    const assento = await this.assentoRepository.findAssento(bilheteDto.numeroAssento);
    if(!assento) {
      throw new AssentoNaoExiste();
    }
    if(assento.reservado) {
      throw new AssentoJaReservado();
    }
    const tokenPayload = decode(authorization) as TokenPayload;
    const bilhete = bilheteFactory(tokenPayload, bilheteDto, assento);
    const bilheteSalvo = await this.bilheteRepository.save(bilhete);
    return bilheteSalvo;
  }
}
