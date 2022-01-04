import { viacaoFactory } from "../dataMappers/viacao/viacaoFactory";
import { Inject, Service } from "typedi";
import { CriarViacaoDto } from "../@types/dto/ViacaoDto";
import { IViacaoRepository } from "../@types/repositories/IViacaoRepository";
import { CriarUsuarioDto } from "../@types/dto/UsuarioDto";
import { Usuario } from "../models/UsuarioEntity";
import { funcionarioFactory } from "../dataMappers/viacao/funcionarioFactory";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";
import { TokenPayload } from "../@types/controllers/TokenPayload";
import { IViacaoService } from "../@types/services/IViacaoService";
import { Viacao } from "../models/ViacaoEntity";

@Service("ViacaoService")
export class ViacaoService implements IViacaoService {
  public constructor(
    @Inject("ViacaoRepository")
    private viacaoRepository: IViacaoRepository,
    @Inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ){}

  async criar(viacaoDto: CriarViacaoDto): Promise<Viacao> {
    try {
      const viacao = viacaoFactory(viacaoDto);
      const viacaoSalvo = await this.viacaoRepository.save(viacao);
      return viacaoSalvo;
    } catch(error) {
      if(error?.code === "ER_DUP_ENTRY") {
        throw new Error("Empresa de Viação ja existe");
      }
      throw error;
    }
  }

  async cadastrarFuncionario(
    usuarioDto: CriarUsuarioDto,
    viacaoId: number
  ): Promise<TokenPayload> {
    try {
      const funcionario = funcionarioFactory(usuarioDto, viacaoId);
      const funcionarioSalvo = await this.usuarioRepository.save(funcionario);
      const { senha, ...funcionarioTratado } = funcionarioSalvo;
      return funcionarioTratado;
    } catch(error) {
      if(error?.code === UsusarioJaExiste.CODE) {
        throw new UsusarioJaExiste();
      }
      throw error;
    }
  }

  async listarFuncionarios(idViacao: number ): Promise<Usuario[]> {
    return await this.usuarioRepository.findUsuariosPorViacao(idViacao);
  }
}
