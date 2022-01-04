import { IViacaoService } from "../@types/services/IViacaoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { UsusarioJaExiste } from "../@types/errors/UsuarioJaExiste";

@Service("ViacaoController")
export class ViacaoController {
  public constructor(
    @Inject("ViacaoService")
    private viacaoService: IViacaoService
  ){}

  async criar(req: Request, res: Response): Promise<void> {
    try {
      const viacao = await this.viacaoService.criar(req.body);
      res.status(201).send(viacao);
      return;
    } catch(error) {
      res.status(400).send();
    }
  }

  async cadastrarFuncionario(req: Request, res: Response): Promise<void> {
    try {
      const funcionario =
        await this.viacaoService.cadastrarFuncionario(
          req.body, Number(req.params.viacaoId)
        );

      res.status(201).send(funcionario);
      return;
    } catch(error) {
      if(error instanceof UsusarioJaExiste) {
        res.status(422).send({ error: error.message });
        return;
      }
      res.status(500).send({ error: "internal server error "});
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    const listaFuncionarios =
      await this.viacaoService.listarFuncionarios(Number(req.params.id));
    res.status(200).send(listaFuncionarios);
  }
}
