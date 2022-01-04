import { Inject, Service } from "typedi";
import { CriarUsuarioDto, UsuarioDto } from "../@types/dto/UsuarioDto";
import { IUsuarioService } from "../@types/services/IUsuarioService";
import { IUsuarioRepository } from "../@types/repositories/IUsuarioRepository";
import { TokenPayload } from "../@types/controllers/TokenPayload";
import { getHashSenha } from "../utils/hashSenha";
import { sign } from "jsonwebtoken";
import { usuarioFactory } from "../dataMappers/usuario/usuarioFactory";
import { Usuario } from "../models/UsuarioEntity";
import { atualizaUsuario } from "../dataMappers/usuario/atualizaUsuario";
import { UsuarioNaoExiste } from "../@types/errors/UsuarioNaoExiste";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";

@Service('UsuarioService')
export class UsuarioService implements IUsuarioService {
  constructor(
    @Inject('UsuarioRepository') private usuarioRepository: IUsuarioRepository
  ) {}

  async listar() {
    return this.usuarioRepository.find();
  }

  async buscar(id: number) {
    const usuario = await this.usuarioRepository.findOne(id);
    if(!usuario) {
      throw new UsuarioNaoExiste();
    }
    return usuario;
  }

  async criar(usuarioDto: CriarUsuarioDto): Promise<TokenPayload> {
    try {
      const usuario = usuarioFactory(usuarioDto);
      const usuarioSalvo = await this.usuarioRepository.save(usuario);
      const { senha, ...usuarioTratado } = usuarioSalvo;
      return usuarioTratado;
    } catch(error) {
      if(error?.code === UsusarioJaExiste.CODE) {
        throw new UsusarioJaExiste();
      }
      throw error;
    }
  }

  async atualizar(id: number, usuarioDto: UsuarioDto): Promise<void> {
    const usuario = await this.usuarioRepository.findOne(id);

    if(!usuario) {
      throw new UsuarioNaoExiste();
    }
    const usuarioAtualizado = atualizaUsuario(usuario, usuarioDto);
    await this.usuarioRepository.save(usuarioAtualizado);
    return;
  }

  async autenticar(
    email: string,
    senha: string
  ): Promise<string> {
    const usuario = await this.usuarioRepository.findByEmail(email);
    if (usuario.senha === getHashSenha(senha)) {
      const { id, nome, email, role } = usuario;
      const payload: TokenPayload = {
        id,
        nome,
        email,
        role,
      };

      return sign(payload, process.env.AUTH_SECRET);
    }
    throw new Error("usuario ou senha incorretos");
  }

  async remover(id: number) {
    const userToRemove = await this.usuarioRepository.findOne(id);
    if (!userToRemove) {
      throw new Error('User not found!');
    }

    await this.usuarioRepository.remove(userToRemove);
  }
}
