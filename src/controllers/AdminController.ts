import { Inject, Service } from "typedi";
import {Request, Response} from "express";
import { IUsuarioService } from "../@types/services/IUsuarioService";
import { DadosParaLogin } from "../@types/controllers/DadosParaLogin";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";
import { UsuarioNaoExiste } from "../@types/errors/UsuarioNaoExiste";

@Service('AdminController')
export class AdminController {

  constructor(@Inject('UsuarioService') private  usuarioService: IUsuarioService) {}

  async list(request: Request, response: Response) {
     try {
      const users = await this.usuarioService.listar();
      response.send(users);
     } catch(error) {
       response.status(500).send({ error: "internal server error "});
       return;
     }
  }

  async get(request: Request, response: Response) {
    try {
      const user = await this.usuarioService.buscar(Number(request.params.id));
      response.send(user);
    } catch(error) {
      if(error instanceof UsuarioNaoExiste) {
        response.status(404).send()
        return;
      }
      response.status(500).send({ error: "internal server error "});
      return;
    }
  }

  async create(request: Request, response: Response) {
    try{
      const user = await this.usuarioService.criar(request.body);
      response.send(user);
    } catch(error) {
      if (error instanceof UsusarioJaExiste) {
        response.status(422).send({ error: error.message });
        return;
      }
      response.status(500).send({ error: "internal server error "});
      return;
    }
  }

  async autenticar(
    request: Request,
    response: Response
  ): Promise<Response<{ token: string } | string>> {
    const { email, senha } = request.body as DadosParaLogin;
    const token = await this.usuarioService.autenticar(email, senha);
    if (token) {
      return response.send({ token });
    }
    return response
      .status(422)
      .send("não foi possivel realizar a autenticacao");
  }

  async update(request: Request, response: Response) {
    try {
      const user =
        await this.usuarioService.atualizar(Number(request.params.id), request.body);
      response.send(user);
    } catch(error) {
      if(error instanceof UsuarioNaoExiste) {
        response.status(404).send()
      }
      response.status(500).send({ error: "internal server error "});
      return;
    }
  }

  async remove(request: Request, response: Response) {
    await this.usuarioService.remover(Number(request.params.id));
    response.send();
  }
}
